import pgp from 'pg-promise';

export default class GetTransaction {
  
  constructor() {
  }
  
  async execute(code: string): Promise<Output>{
    const connection = pgp()('postgres://postgres:admin@localhost:5432/app');
    const transaction = await connection.one('SELECT * FROM public.transaction WHERE code = $1', [code]);
    transaction.amount = parseFloat(transaction.amount);
    transaction.paymentMethod = transaction.payment_method;
    const installments = await connection.query('SELECT * FROM public.installment WHERE code = $1', [code]);
    for (const installment of installments) {
      installment.amount = parseFloat(installment.amount);
    }
    transaction.installments = installments;
    await connection.$pool.end();
    return transaction;
  }
}

type Output = {
  code: string,
  amount: number,
  numberInstallments: number,
  paymentMethod: string,
  installments: { number: number, amount: number }[]
}