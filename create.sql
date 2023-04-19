DROP TABLE IF EXISTS public.transaction;
DROP TABLE IF EXISTS public.installment;


CREATE TABLE public.transaction (
  code text PRIMARY KEY,
  amount numeric,
  number_installments integer,
  payment_method text,
  date timestamp DEFAULT NOW()
);
CREATE TABLE public.installment (
  code text REFERENCES public.transaction (code),
  number integer,
  amount numeric,
  primary key (code, number)
);