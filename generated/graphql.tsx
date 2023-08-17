import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  date: any;
  numeric: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** ordering argument of a cursor */
export type Cursor_Ordering =
  /** ascending ordering of the cursor */
  | 'ASC'
  /** descending ordering of the cursor */
  | 'DESC';

/** columns and relationships of "customers" */
export type Customers = {
  __typename?: 'customers';
  customer_id: Scalars['String'];
  email_address?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  /** An array relationship */
  sale_transactions: Array<Sale_Transactions>;
  /** An aggregate relationship */
  sale_transactions_aggregate: Sale_Transactions_Aggregate;
};


/** columns and relationships of "customers" */
export type CustomersSale_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Sale_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sale_Transactions_Order_By>>;
  where?: InputMaybe<Sale_Transactions_Bool_Exp>;
};


/** columns and relationships of "customers" */
export type CustomersSale_Transactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sale_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sale_Transactions_Order_By>>;
  where?: InputMaybe<Sale_Transactions_Bool_Exp>;
};

/** aggregated selection of "customers" */
export type Customers_Aggregate = {
  __typename?: 'customers_aggregate';
  aggregate?: Maybe<Customers_Aggregate_Fields>;
  nodes: Array<Customers>;
};

/** aggregate fields of "customers" */
export type Customers_Aggregate_Fields = {
  __typename?: 'customers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Customers_Max_Fields>;
  min?: Maybe<Customers_Min_Fields>;
};


/** aggregate fields of "customers" */
export type Customers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Customers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "customers". All fields are combined with a logical 'AND'. */
export type Customers_Bool_Exp = {
  _and?: InputMaybe<Array<Customers_Bool_Exp>>;
  _not?: InputMaybe<Customers_Bool_Exp>;
  _or?: InputMaybe<Array<Customers_Bool_Exp>>;
  customer_id?: InputMaybe<String_Comparison_Exp>;
  email_address?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  sale_transactions?: InputMaybe<Sale_Transactions_Bool_Exp>;
  sale_transactions_aggregate?: InputMaybe<Sale_Transactions_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "customers" */
export type Customers_Constraint =
  /** unique or primary key constraint on columns "customer_id" */
  | 'customers_pkey';

/** input type for inserting data into table "customers" */
export type Customers_Insert_Input = {
  customer_id?: InputMaybe<Scalars['String']>;
  email_address?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  sale_transactions?: InputMaybe<Sale_Transactions_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Customers_Max_Fields = {
  __typename?: 'customers_max_fields';
  customer_id?: Maybe<Scalars['String']>;
  email_address?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Customers_Min_Fields = {
  __typename?: 'customers_min_fields';
  customer_id?: Maybe<Scalars['String']>;
  email_address?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "customers" */
export type Customers_Mutation_Response = {
  __typename?: 'customers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Customers>;
};

/** input type for inserting object relation for remote table "customers" */
export type Customers_Obj_Rel_Insert_Input = {
  data: Customers_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};

/** on_conflict condition type for table "customers" */
export type Customers_On_Conflict = {
  constraint: Customers_Constraint;
  update_columns?: Array<Customers_Update_Column>;
  where?: InputMaybe<Customers_Bool_Exp>;
};

/** Ordering options when selecting data from "customers". */
export type Customers_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  email_address?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  sale_transactions_aggregate?: InputMaybe<Sale_Transactions_Aggregate_Order_By>;
};

/** primary key columns input for table: customers */
export type Customers_Pk_Columns_Input = {
  customer_id: Scalars['String'];
};

/** select columns of table "customers" */
export type Customers_Select_Column =
  /** column name */
  | 'customer_id'
  /** column name */
  | 'email_address'
  /** column name */
  | 'first_name'
  /** column name */
  | 'last_name';

/** input type for updating data in table "customers" */
export type Customers_Set_Input = {
  customer_id?: InputMaybe<Scalars['String']>;
  email_address?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "customers" */
export type Customers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Customers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Customers_Stream_Cursor_Value_Input = {
  customer_id?: InputMaybe<Scalars['String']>;
  email_address?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "customers" */
export type Customers_Update_Column =
  /** column name */
  | 'customer_id'
  /** column name */
  | 'email_address'
  /** column name */
  | 'first_name'
  /** column name */
  | 'last_name';

export type Customers_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Customers_Set_Input>;
  /** filter the rows which have to be updated */
  where: Customers_Bool_Exp;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** columns and relationships of "employees" */
export type Employees = {
  __typename?: 'employees';
  employee_id: Scalars['String'];
  /** An array relationship */
  sale_transactions: Array<Sale_Transactions>;
  /** An aggregate relationship */
  sale_transactions_aggregate: Sale_Transactions_Aggregate;
  start_date?: Maybe<Scalars['date']>;
};


/** columns and relationships of "employees" */
export type EmployeesSale_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Sale_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sale_Transactions_Order_By>>;
  where?: InputMaybe<Sale_Transactions_Bool_Exp>;
};


/** columns and relationships of "employees" */
export type EmployeesSale_Transactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sale_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sale_Transactions_Order_By>>;
  where?: InputMaybe<Sale_Transactions_Bool_Exp>;
};

/** aggregated selection of "employees" */
export type Employees_Aggregate = {
  __typename?: 'employees_aggregate';
  aggregate?: Maybe<Employees_Aggregate_Fields>;
  nodes: Array<Employees>;
};

/** aggregate fields of "employees" */
export type Employees_Aggregate_Fields = {
  __typename?: 'employees_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Employees_Max_Fields>;
  min?: Maybe<Employees_Min_Fields>;
};


/** aggregate fields of "employees" */
export type Employees_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Employees_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "employees". All fields are combined with a logical 'AND'. */
export type Employees_Bool_Exp = {
  _and?: InputMaybe<Array<Employees_Bool_Exp>>;
  _not?: InputMaybe<Employees_Bool_Exp>;
  _or?: InputMaybe<Array<Employees_Bool_Exp>>;
  employee_id?: InputMaybe<String_Comparison_Exp>;
  sale_transactions?: InputMaybe<Sale_Transactions_Bool_Exp>;
  sale_transactions_aggregate?: InputMaybe<Sale_Transactions_Aggregate_Bool_Exp>;
  start_date?: InputMaybe<Date_Comparison_Exp>;
};

/** unique or primary key constraints on table "employees" */
export type Employees_Constraint =
  /** unique or primary key constraint on columns "employee_id" */
  | 'employees_pkey';

/** input type for inserting data into table "employees" */
export type Employees_Insert_Input = {
  employee_id?: InputMaybe<Scalars['String']>;
  sale_transactions?: InputMaybe<Sale_Transactions_Arr_Rel_Insert_Input>;
  start_date?: InputMaybe<Scalars['date']>;
};

/** aggregate max on columns */
export type Employees_Max_Fields = {
  __typename?: 'employees_max_fields';
  employee_id?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['date']>;
};

/** aggregate min on columns */
export type Employees_Min_Fields = {
  __typename?: 'employees_min_fields';
  employee_id?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['date']>;
};

/** response of any mutation on the table "employees" */
export type Employees_Mutation_Response = {
  __typename?: 'employees_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Employees>;
};

/** input type for inserting object relation for remote table "employees" */
export type Employees_Obj_Rel_Insert_Input = {
  data: Employees_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Employees_On_Conflict>;
};

/** on_conflict condition type for table "employees" */
export type Employees_On_Conflict = {
  constraint: Employees_Constraint;
  update_columns?: Array<Employees_Update_Column>;
  where?: InputMaybe<Employees_Bool_Exp>;
};

/** Ordering options when selecting data from "employees". */
export type Employees_Order_By = {
  employee_id?: InputMaybe<Order_By>;
  sale_transactions_aggregate?: InputMaybe<Sale_Transactions_Aggregate_Order_By>;
  start_date?: InputMaybe<Order_By>;
};

/** primary key columns input for table: employees */
export type Employees_Pk_Columns_Input = {
  employee_id: Scalars['String'];
};

/** select columns of table "employees" */
export type Employees_Select_Column =
  /** column name */
  | 'employee_id'
  /** column name */
  | 'start_date';

/** input type for updating data in table "employees" */
export type Employees_Set_Input = {
  employee_id?: InputMaybe<Scalars['String']>;
  start_date?: InputMaybe<Scalars['date']>;
};

/** Streaming cursor of the table "employees" */
export type Employees_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Employees_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Employees_Stream_Cursor_Value_Input = {
  employee_id?: InputMaybe<Scalars['String']>;
  start_date?: InputMaybe<Scalars['date']>;
};

/** update columns of table "employees" */
export type Employees_Update_Column =
  /** column name */
  | 'employee_id'
  /** column name */
  | 'start_date';

export type Employees_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Employees_Set_Input>;
  /** filter the rows which have to be updated */
  where: Employees_Bool_Exp;
};

/** columns and relationships of "inventory" */
export type Inventory = {
  __typename?: 'inventory';
  brand?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  item_id: Scalars['String'];
  model?: Maybe<Scalars['String']>;
  msrp?: Maybe<Scalars['numeric']>;
  quantity?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  /** An array relationship */
  sold_items: Array<Sold_Items>;
  /** An aggregate relationship */
  sold_items_aggregate: Sold_Items_Aggregate;
  supplier?: Maybe<Scalars['String']>;
  unit_price?: Maybe<Scalars['numeric']>;
  upc?: Maybe<Scalars['String']>;
};


/** columns and relationships of "inventory" */
export type InventorySold_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Sold_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sold_Items_Order_By>>;
  where?: InputMaybe<Sold_Items_Bool_Exp>;
};


/** columns and relationships of "inventory" */
export type InventorySold_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sold_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sold_Items_Order_By>>;
  where?: InputMaybe<Sold_Items_Bool_Exp>;
};

/** aggregated selection of "inventory" */
export type Inventory_Aggregate = {
  __typename?: 'inventory_aggregate';
  aggregate?: Maybe<Inventory_Aggregate_Fields>;
  nodes: Array<Inventory>;
};

/** aggregate fields of "inventory" */
export type Inventory_Aggregate_Fields = {
  __typename?: 'inventory_aggregate_fields';
  avg?: Maybe<Inventory_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Inventory_Max_Fields>;
  min?: Maybe<Inventory_Min_Fields>;
  stddev?: Maybe<Inventory_Stddev_Fields>;
  stddev_pop?: Maybe<Inventory_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Inventory_Stddev_Samp_Fields>;
  sum?: Maybe<Inventory_Sum_Fields>;
  var_pop?: Maybe<Inventory_Var_Pop_Fields>;
  var_samp?: Maybe<Inventory_Var_Samp_Fields>;
  variance?: Maybe<Inventory_Variance_Fields>;
};


/** aggregate fields of "inventory" */
export type Inventory_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Inventory_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Inventory_Avg_Fields = {
  __typename?: 'inventory_avg_fields';
  msrp?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  unit_price?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "inventory". All fields are combined with a logical 'AND'. */
export type Inventory_Bool_Exp = {
  _and?: InputMaybe<Array<Inventory_Bool_Exp>>;
  _not?: InputMaybe<Inventory_Bool_Exp>;
  _or?: InputMaybe<Array<Inventory_Bool_Exp>>;
  brand?: InputMaybe<String_Comparison_Exp>;
  category?: InputMaybe<String_Comparison_Exp>;
  item_id?: InputMaybe<String_Comparison_Exp>;
  model?: InputMaybe<String_Comparison_Exp>;
  msrp?: InputMaybe<Numeric_Comparison_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
  sku?: InputMaybe<String_Comparison_Exp>;
  sold_items?: InputMaybe<Sold_Items_Bool_Exp>;
  sold_items_aggregate?: InputMaybe<Sold_Items_Aggregate_Bool_Exp>;
  supplier?: InputMaybe<String_Comparison_Exp>;
  unit_price?: InputMaybe<Numeric_Comparison_Exp>;
  upc?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "inventory" */
export type Inventory_Constraint =
  /** unique or primary key constraint on columns "item_id" */
  | 'inventory_pkey';

/** input type for incrementing numeric columns in table "inventory" */
export type Inventory_Inc_Input = {
  msrp?: InputMaybe<Scalars['numeric']>;
  quantity?: InputMaybe<Scalars['Int']>;
  unit_price?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "inventory" */
export type Inventory_Insert_Input = {
  brand?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  item_id?: InputMaybe<Scalars['String']>;
  model?: InputMaybe<Scalars['String']>;
  msrp?: InputMaybe<Scalars['numeric']>;
  quantity?: InputMaybe<Scalars['Int']>;
  sku?: InputMaybe<Scalars['String']>;
  sold_items?: InputMaybe<Sold_Items_Arr_Rel_Insert_Input>;
  supplier?: InputMaybe<Scalars['String']>;
  unit_price?: InputMaybe<Scalars['numeric']>;
  upc?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Inventory_Max_Fields = {
  __typename?: 'inventory_max_fields';
  brand?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  item_id?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  msrp?: Maybe<Scalars['numeric']>;
  quantity?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  supplier?: Maybe<Scalars['String']>;
  unit_price?: Maybe<Scalars['numeric']>;
  upc?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Inventory_Min_Fields = {
  __typename?: 'inventory_min_fields';
  brand?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  item_id?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  msrp?: Maybe<Scalars['numeric']>;
  quantity?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  supplier?: Maybe<Scalars['String']>;
  unit_price?: Maybe<Scalars['numeric']>;
  upc?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "inventory" */
export type Inventory_Mutation_Response = {
  __typename?: 'inventory_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Inventory>;
};

/** input type for inserting object relation for remote table "inventory" */
export type Inventory_Obj_Rel_Insert_Input = {
  data: Inventory_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Inventory_On_Conflict>;
};

/** on_conflict condition type for table "inventory" */
export type Inventory_On_Conflict = {
  constraint: Inventory_Constraint;
  update_columns?: Array<Inventory_Update_Column>;
  where?: InputMaybe<Inventory_Bool_Exp>;
};

/** Ordering options when selecting data from "inventory". */
export type Inventory_Order_By = {
  brand?: InputMaybe<Order_By>;
  category?: InputMaybe<Order_By>;
  item_id?: InputMaybe<Order_By>;
  model?: InputMaybe<Order_By>;
  msrp?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  sku?: InputMaybe<Order_By>;
  sold_items_aggregate?: InputMaybe<Sold_Items_Aggregate_Order_By>;
  supplier?: InputMaybe<Order_By>;
  unit_price?: InputMaybe<Order_By>;
  upc?: InputMaybe<Order_By>;
};

/** primary key columns input for table: inventory */
export type Inventory_Pk_Columns_Input = {
  item_id: Scalars['String'];
};

/** select columns of table "inventory" */
export type Inventory_Select_Column =
  /** column name */
  | 'brand'
  /** column name */
  | 'category'
  /** column name */
  | 'item_id'
  /** column name */
  | 'model'
  /** column name */
  | 'msrp'
  /** column name */
  | 'quantity'
  /** column name */
  | 'sku'
  /** column name */
  | 'supplier'
  /** column name */
  | 'unit_price'
  /** column name */
  | 'upc';

/** input type for updating data in table "inventory" */
export type Inventory_Set_Input = {
  brand?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  item_id?: InputMaybe<Scalars['String']>;
  model?: InputMaybe<Scalars['String']>;
  msrp?: InputMaybe<Scalars['numeric']>;
  quantity?: InputMaybe<Scalars['Int']>;
  sku?: InputMaybe<Scalars['String']>;
  supplier?: InputMaybe<Scalars['String']>;
  unit_price?: InputMaybe<Scalars['numeric']>;
  upc?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Inventory_Stddev_Fields = {
  __typename?: 'inventory_stddev_fields';
  msrp?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  unit_price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Inventory_Stddev_Pop_Fields = {
  __typename?: 'inventory_stddev_pop_fields';
  msrp?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  unit_price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Inventory_Stddev_Samp_Fields = {
  __typename?: 'inventory_stddev_samp_fields';
  msrp?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  unit_price?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "inventory" */
export type Inventory_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Inventory_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Inventory_Stream_Cursor_Value_Input = {
  brand?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  item_id?: InputMaybe<Scalars['String']>;
  model?: InputMaybe<Scalars['String']>;
  msrp?: InputMaybe<Scalars['numeric']>;
  quantity?: InputMaybe<Scalars['Int']>;
  sku?: InputMaybe<Scalars['String']>;
  supplier?: InputMaybe<Scalars['String']>;
  unit_price?: InputMaybe<Scalars['numeric']>;
  upc?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Inventory_Sum_Fields = {
  __typename?: 'inventory_sum_fields';
  msrp?: Maybe<Scalars['numeric']>;
  quantity?: Maybe<Scalars['Int']>;
  unit_price?: Maybe<Scalars['numeric']>;
};

/** update columns of table "inventory" */
export type Inventory_Update_Column =
  /** column name */
  | 'brand'
  /** column name */
  | 'category'
  /** column name */
  | 'item_id'
  /** column name */
  | 'model'
  /** column name */
  | 'msrp'
  /** column name */
  | 'quantity'
  /** column name */
  | 'sku'
  /** column name */
  | 'supplier'
  /** column name */
  | 'unit_price'
  /** column name */
  | 'upc';

export type Inventory_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Inventory_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Inventory_Set_Input>;
  /** filter the rows which have to be updated */
  where: Inventory_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Inventory_Var_Pop_Fields = {
  __typename?: 'inventory_var_pop_fields';
  msrp?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  unit_price?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Inventory_Var_Samp_Fields = {
  __typename?: 'inventory_var_samp_fields';
  msrp?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  unit_price?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Inventory_Variance_Fields = {
  __typename?: 'inventory_variance_fields';
  msrp?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  unit_price?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "customers" */
  delete_customers?: Maybe<Customers_Mutation_Response>;
  /** delete single row from the table: "customers" */
  delete_customers_by_pk?: Maybe<Customers>;
  /** delete data from the table: "employees" */
  delete_employees?: Maybe<Employees_Mutation_Response>;
  /** delete single row from the table: "employees" */
  delete_employees_by_pk?: Maybe<Employees>;
  /** delete data from the table: "inventory" */
  delete_inventory?: Maybe<Inventory_Mutation_Response>;
  /** delete single row from the table: "inventory" */
  delete_inventory_by_pk?: Maybe<Inventory>;
  /** delete data from the table: "sale_transactions" */
  delete_sale_transactions?: Maybe<Sale_Transactions_Mutation_Response>;
  /** delete single row from the table: "sale_transactions" */
  delete_sale_transactions_by_pk?: Maybe<Sale_Transactions>;
  /** delete data from the table: "sold_items" */
  delete_sold_items?: Maybe<Sold_Items_Mutation_Response>;
  /** delete single row from the table: "sold_items" */
  delete_sold_items_by_pk?: Maybe<Sold_Items>;
  /** insert data into the table: "customers" */
  insert_customers?: Maybe<Customers_Mutation_Response>;
  /** insert a single row into the table: "customers" */
  insert_customers_one?: Maybe<Customers>;
  /** insert data into the table: "employees" */
  insert_employees?: Maybe<Employees_Mutation_Response>;
  /** insert a single row into the table: "employees" */
  insert_employees_one?: Maybe<Employees>;
  /** insert data into the table: "inventory" */
  insert_inventory?: Maybe<Inventory_Mutation_Response>;
  /** insert a single row into the table: "inventory" */
  insert_inventory_one?: Maybe<Inventory>;
  /** insert data into the table: "sale_transactions" */
  insert_sale_transactions?: Maybe<Sale_Transactions_Mutation_Response>;
  /** insert a single row into the table: "sale_transactions" */
  insert_sale_transactions_one?: Maybe<Sale_Transactions>;
  /** insert data into the table: "sold_items" */
  insert_sold_items?: Maybe<Sold_Items_Mutation_Response>;
  /** insert a single row into the table: "sold_items" */
  insert_sold_items_one?: Maybe<Sold_Items>;
  /** update data of the table: "customers" */
  update_customers?: Maybe<Customers_Mutation_Response>;
  /** update single row of the table: "customers" */
  update_customers_by_pk?: Maybe<Customers>;
  /** update multiples rows of table: "customers" */
  update_customers_many?: Maybe<Array<Maybe<Customers_Mutation_Response>>>;
  /** update data of the table: "employees" */
  update_employees?: Maybe<Employees_Mutation_Response>;
  /** update single row of the table: "employees" */
  update_employees_by_pk?: Maybe<Employees>;
  /** update multiples rows of table: "employees" */
  update_employees_many?: Maybe<Array<Maybe<Employees_Mutation_Response>>>;
  /** update data of the table: "inventory" */
  update_inventory?: Maybe<Inventory_Mutation_Response>;
  /** update single row of the table: "inventory" */
  update_inventory_by_pk?: Maybe<Inventory>;
  /** update multiples rows of table: "inventory" */
  update_inventory_many?: Maybe<Array<Maybe<Inventory_Mutation_Response>>>;
  /** update data of the table: "sale_transactions" */
  update_sale_transactions?: Maybe<Sale_Transactions_Mutation_Response>;
  /** update single row of the table: "sale_transactions" */
  update_sale_transactions_by_pk?: Maybe<Sale_Transactions>;
  /** update multiples rows of table: "sale_transactions" */
  update_sale_transactions_many?: Maybe<Array<Maybe<Sale_Transactions_Mutation_Response>>>;
  /** update data of the table: "sold_items" */
  update_sold_items?: Maybe<Sold_Items_Mutation_Response>;
  /** update single row of the table: "sold_items" */
  update_sold_items_by_pk?: Maybe<Sold_Items>;
  /** update multiples rows of table: "sold_items" */
  update_sold_items_many?: Maybe<Array<Maybe<Sold_Items_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_CustomersArgs = {
  where: Customers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Customers_By_PkArgs = {
  customer_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_EmployeesArgs = {
  where: Employees_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Employees_By_PkArgs = {
  employee_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_InventoryArgs = {
  where: Inventory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Inventory_By_PkArgs = {
  item_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Sale_TransactionsArgs = {
  where: Sale_Transactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Sale_Transactions_By_PkArgs = {
  transaction_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Sold_ItemsArgs = {
  where: Sold_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Sold_Items_By_PkArgs = {
  sold_item_count: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootInsert_CustomersArgs = {
  objects: Array<Customers_Insert_Input>;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Customers_OneArgs = {
  object: Customers_Insert_Input;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_EmployeesArgs = {
  objects: Array<Employees_Insert_Input>;
  on_conflict?: InputMaybe<Employees_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Employees_OneArgs = {
  object: Employees_Insert_Input;
  on_conflict?: InputMaybe<Employees_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_InventoryArgs = {
  objects: Array<Inventory_Insert_Input>;
  on_conflict?: InputMaybe<Inventory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Inventory_OneArgs = {
  object: Inventory_Insert_Input;
  on_conflict?: InputMaybe<Inventory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sale_TransactionsArgs = {
  objects: Array<Sale_Transactions_Insert_Input>;
  on_conflict?: InputMaybe<Sale_Transactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sale_Transactions_OneArgs = {
  object: Sale_Transactions_Insert_Input;
  on_conflict?: InputMaybe<Sale_Transactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sold_ItemsArgs = {
  objects: Array<Sold_Items_Insert_Input>;
  on_conflict?: InputMaybe<Sold_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sold_Items_OneArgs = {
  object: Sold_Items_Insert_Input;
  on_conflict?: InputMaybe<Sold_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CustomersArgs = {
  _set?: InputMaybe<Customers_Set_Input>;
  where: Customers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Customers_By_PkArgs = {
  _set?: InputMaybe<Customers_Set_Input>;
  pk_columns: Customers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Customers_ManyArgs = {
  updates: Array<Customers_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_EmployeesArgs = {
  _set?: InputMaybe<Employees_Set_Input>;
  where: Employees_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Employees_By_PkArgs = {
  _set?: InputMaybe<Employees_Set_Input>;
  pk_columns: Employees_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Employees_ManyArgs = {
  updates: Array<Employees_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_InventoryArgs = {
  _inc?: InputMaybe<Inventory_Inc_Input>;
  _set?: InputMaybe<Inventory_Set_Input>;
  where: Inventory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Inventory_By_PkArgs = {
  _inc?: InputMaybe<Inventory_Inc_Input>;
  _set?: InputMaybe<Inventory_Set_Input>;
  pk_columns: Inventory_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Inventory_ManyArgs = {
  updates: Array<Inventory_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Sale_TransactionsArgs = {
  _inc?: InputMaybe<Sale_Transactions_Inc_Input>;
  _set?: InputMaybe<Sale_Transactions_Set_Input>;
  where: Sale_Transactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Sale_Transactions_By_PkArgs = {
  _inc?: InputMaybe<Sale_Transactions_Inc_Input>;
  _set?: InputMaybe<Sale_Transactions_Set_Input>;
  pk_columns: Sale_Transactions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Sale_Transactions_ManyArgs = {
  updates: Array<Sale_Transactions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Sold_ItemsArgs = {
  _inc?: InputMaybe<Sold_Items_Inc_Input>;
  _set?: InputMaybe<Sold_Items_Set_Input>;
  where: Sold_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Sold_Items_By_PkArgs = {
  _inc?: InputMaybe<Sold_Items_Inc_Input>;
  _set?: InputMaybe<Sold_Items_Set_Input>;
  pk_columns: Sold_Items_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Sold_Items_ManyArgs = {
  updates: Array<Sold_Items_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export type Order_By =
  /** in ascending order, nulls last */
  | 'asc'
  /** in ascending order, nulls first */
  | 'asc_nulls_first'
  /** in ascending order, nulls last */
  | 'asc_nulls_last'
  /** in descending order, nulls first */
  | 'desc'
  /** in descending order, nulls first */
  | 'desc_nulls_first'
  /** in descending order, nulls last */
  | 'desc_nulls_last';

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "customers" */
  customers: Array<Customers>;
  /** fetch aggregated fields from the table: "customers" */
  customers_aggregate: Customers_Aggregate;
  /** fetch data from the table: "customers" using primary key columns */
  customers_by_pk?: Maybe<Customers>;
  /** fetch data from the table: "employees" */
  employees: Array<Employees>;
  /** fetch aggregated fields from the table: "employees" */
  employees_aggregate: Employees_Aggregate;
  /** fetch data from the table: "employees" using primary key columns */
  employees_by_pk?: Maybe<Employees>;
  /** fetch data from the table: "inventory" */
  inventory: Array<Inventory>;
  /** fetch aggregated fields from the table: "inventory" */
  inventory_aggregate: Inventory_Aggregate;
  /** fetch data from the table: "inventory" using primary key columns */
  inventory_by_pk?: Maybe<Inventory>;
  /** An array relationship */
  sale_transactions: Array<Sale_Transactions>;
  /** An aggregate relationship */
  sale_transactions_aggregate: Sale_Transactions_Aggregate;
  /** fetch data from the table: "sale_transactions" using primary key columns */
  sale_transactions_by_pk?: Maybe<Sale_Transactions>;
  /** An array relationship */
  sold_items: Array<Sold_Items>;
  /** An aggregate relationship */
  sold_items_aggregate: Sold_Items_Aggregate;
  /** fetch data from the table: "sold_items" using primary key columns */
  sold_items_by_pk?: Maybe<Sold_Items>;
};


export type Query_RootCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Query_RootCustomers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Query_RootCustomers_By_PkArgs = {
  customer_id: Scalars['String'];
};


export type Query_RootEmployeesArgs = {
  distinct_on?: InputMaybe<Array<Employees_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Employees_Order_By>>;
  where?: InputMaybe<Employees_Bool_Exp>;
};


export type Query_RootEmployees_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Employees_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Employees_Order_By>>;
  where?: InputMaybe<Employees_Bool_Exp>;
};


export type Query_RootEmployees_By_PkArgs = {
  employee_id: Scalars['String'];
};


export type Query_RootInventoryArgs = {
  distinct_on?: InputMaybe<Array<Inventory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Inventory_Order_By>>;
  where?: InputMaybe<Inventory_Bool_Exp>;
};


export type Query_RootInventory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Inventory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Inventory_Order_By>>;
  where?: InputMaybe<Inventory_Bool_Exp>;
};


export type Query_RootInventory_By_PkArgs = {
  item_id: Scalars['String'];
};


export type Query_RootSale_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Sale_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sale_Transactions_Order_By>>;
  where?: InputMaybe<Sale_Transactions_Bool_Exp>;
};


export type Query_RootSale_Transactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sale_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sale_Transactions_Order_By>>;
  where?: InputMaybe<Sale_Transactions_Bool_Exp>;
};


export type Query_RootSale_Transactions_By_PkArgs = {
  transaction_id: Scalars['String'];
};


export type Query_RootSold_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Sold_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sold_Items_Order_By>>;
  where?: InputMaybe<Sold_Items_Bool_Exp>;
};


export type Query_RootSold_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sold_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sold_Items_Order_By>>;
  where?: InputMaybe<Sold_Items_Bool_Exp>;
};


export type Query_RootSold_Items_By_PkArgs = {
  sold_item_count: Scalars['bigint'];
};

/** columns and relationships of "sale_transactions" */
export type Sale_Transactions = {
  __typename?: 'sale_transactions';
  /** An object relationship */
  customer?: Maybe<Customers>;
  customer_id?: Maybe<Scalars['String']>;
  /** An object relationship */
  employee?: Maybe<Employees>;
  employee_id?: Maybe<Scalars['String']>;
  item_count?: Maybe<Scalars['Int']>;
  net_amount?: Maybe<Scalars['numeric']>;
  profit?: Maybe<Scalars['numeric']>;
  /** An array relationship */
  sold_items: Array<Sold_Items>;
  /** An aggregate relationship */
  sold_items_aggregate: Sold_Items_Aggregate;
  transaction_date?: Maybe<Scalars['date']>;
  transaction_id: Scalars['String'];
};


/** columns and relationships of "sale_transactions" */
export type Sale_TransactionsSold_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Sold_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sold_Items_Order_By>>;
  where?: InputMaybe<Sold_Items_Bool_Exp>;
};


/** columns and relationships of "sale_transactions" */
export type Sale_TransactionsSold_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sold_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sold_Items_Order_By>>;
  where?: InputMaybe<Sold_Items_Bool_Exp>;
};

/** aggregated selection of "sale_transactions" */
export type Sale_Transactions_Aggregate = {
  __typename?: 'sale_transactions_aggregate';
  aggregate?: Maybe<Sale_Transactions_Aggregate_Fields>;
  nodes: Array<Sale_Transactions>;
};

export type Sale_Transactions_Aggregate_Bool_Exp = {
  count?: InputMaybe<Sale_Transactions_Aggregate_Bool_Exp_Count>;
};

export type Sale_Transactions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Sale_Transactions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Sale_Transactions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "sale_transactions" */
export type Sale_Transactions_Aggregate_Fields = {
  __typename?: 'sale_transactions_aggregate_fields';
  avg?: Maybe<Sale_Transactions_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Sale_Transactions_Max_Fields>;
  min?: Maybe<Sale_Transactions_Min_Fields>;
  stddev?: Maybe<Sale_Transactions_Stddev_Fields>;
  stddev_pop?: Maybe<Sale_Transactions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Sale_Transactions_Stddev_Samp_Fields>;
  sum?: Maybe<Sale_Transactions_Sum_Fields>;
  var_pop?: Maybe<Sale_Transactions_Var_Pop_Fields>;
  var_samp?: Maybe<Sale_Transactions_Var_Samp_Fields>;
  variance?: Maybe<Sale_Transactions_Variance_Fields>;
};


/** aggregate fields of "sale_transactions" */
export type Sale_Transactions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Sale_Transactions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "sale_transactions" */
export type Sale_Transactions_Aggregate_Order_By = {
  avg?: InputMaybe<Sale_Transactions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Sale_Transactions_Max_Order_By>;
  min?: InputMaybe<Sale_Transactions_Min_Order_By>;
  stddev?: InputMaybe<Sale_Transactions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Sale_Transactions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Sale_Transactions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Sale_Transactions_Sum_Order_By>;
  var_pop?: InputMaybe<Sale_Transactions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Sale_Transactions_Var_Samp_Order_By>;
  variance?: InputMaybe<Sale_Transactions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "sale_transactions" */
export type Sale_Transactions_Arr_Rel_Insert_Input = {
  data: Array<Sale_Transactions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Sale_Transactions_On_Conflict>;
};

/** aggregate avg on columns */
export type Sale_Transactions_Avg_Fields = {
  __typename?: 'sale_transactions_avg_fields';
  item_count?: Maybe<Scalars['Float']>;
  net_amount?: Maybe<Scalars['Float']>;
  profit?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "sale_transactions" */
export type Sale_Transactions_Avg_Order_By = {
  item_count?: InputMaybe<Order_By>;
  net_amount?: InputMaybe<Order_By>;
  profit?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "sale_transactions". All fields are combined with a logical 'AND'. */
export type Sale_Transactions_Bool_Exp = {
  _and?: InputMaybe<Array<Sale_Transactions_Bool_Exp>>;
  _not?: InputMaybe<Sale_Transactions_Bool_Exp>;
  _or?: InputMaybe<Array<Sale_Transactions_Bool_Exp>>;
  customer?: InputMaybe<Customers_Bool_Exp>;
  customer_id?: InputMaybe<String_Comparison_Exp>;
  employee?: InputMaybe<Employees_Bool_Exp>;
  employee_id?: InputMaybe<String_Comparison_Exp>;
  item_count?: InputMaybe<Int_Comparison_Exp>;
  net_amount?: InputMaybe<Numeric_Comparison_Exp>;
  profit?: InputMaybe<Numeric_Comparison_Exp>;
  sold_items?: InputMaybe<Sold_Items_Bool_Exp>;
  sold_items_aggregate?: InputMaybe<Sold_Items_Aggregate_Bool_Exp>;
  transaction_date?: InputMaybe<Date_Comparison_Exp>;
  transaction_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "sale_transactions" */
export type Sale_Transactions_Constraint =
  /** unique or primary key constraint on columns "transaction_id" */
  | 'sale_transactions_pkey';

/** input type for incrementing numeric columns in table "sale_transactions" */
export type Sale_Transactions_Inc_Input = {
  item_count?: InputMaybe<Scalars['Int']>;
  net_amount?: InputMaybe<Scalars['numeric']>;
  profit?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "sale_transactions" */
export type Sale_Transactions_Insert_Input = {
  customer?: InputMaybe<Customers_Obj_Rel_Insert_Input>;
  customer_id?: InputMaybe<Scalars['String']>;
  employee?: InputMaybe<Employees_Obj_Rel_Insert_Input>;
  employee_id?: InputMaybe<Scalars['String']>;
  item_count?: InputMaybe<Scalars['Int']>;
  net_amount?: InputMaybe<Scalars['numeric']>;
  profit?: InputMaybe<Scalars['numeric']>;
  sold_items?: InputMaybe<Sold_Items_Arr_Rel_Insert_Input>;
  transaction_date?: InputMaybe<Scalars['date']>;
  transaction_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Sale_Transactions_Max_Fields = {
  __typename?: 'sale_transactions_max_fields';
  customer_id?: Maybe<Scalars['String']>;
  employee_id?: Maybe<Scalars['String']>;
  item_count?: Maybe<Scalars['Int']>;
  net_amount?: Maybe<Scalars['numeric']>;
  profit?: Maybe<Scalars['numeric']>;
  transaction_date?: Maybe<Scalars['date']>;
  transaction_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "sale_transactions" */
export type Sale_Transactions_Max_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  employee_id?: InputMaybe<Order_By>;
  item_count?: InputMaybe<Order_By>;
  net_amount?: InputMaybe<Order_By>;
  profit?: InputMaybe<Order_By>;
  transaction_date?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Sale_Transactions_Min_Fields = {
  __typename?: 'sale_transactions_min_fields';
  customer_id?: Maybe<Scalars['String']>;
  employee_id?: Maybe<Scalars['String']>;
  item_count?: Maybe<Scalars['Int']>;
  net_amount?: Maybe<Scalars['numeric']>;
  profit?: Maybe<Scalars['numeric']>;
  transaction_date?: Maybe<Scalars['date']>;
  transaction_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "sale_transactions" */
export type Sale_Transactions_Min_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  employee_id?: InputMaybe<Order_By>;
  item_count?: InputMaybe<Order_By>;
  net_amount?: InputMaybe<Order_By>;
  profit?: InputMaybe<Order_By>;
  transaction_date?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "sale_transactions" */
export type Sale_Transactions_Mutation_Response = {
  __typename?: 'sale_transactions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Sale_Transactions>;
};

/** input type for inserting object relation for remote table "sale_transactions" */
export type Sale_Transactions_Obj_Rel_Insert_Input = {
  data: Sale_Transactions_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Sale_Transactions_On_Conflict>;
};

/** on_conflict condition type for table "sale_transactions" */
export type Sale_Transactions_On_Conflict = {
  constraint: Sale_Transactions_Constraint;
  update_columns?: Array<Sale_Transactions_Update_Column>;
  where?: InputMaybe<Sale_Transactions_Bool_Exp>;
};

/** Ordering options when selecting data from "sale_transactions". */
export type Sale_Transactions_Order_By = {
  customer?: InputMaybe<Customers_Order_By>;
  customer_id?: InputMaybe<Order_By>;
  employee?: InputMaybe<Employees_Order_By>;
  employee_id?: InputMaybe<Order_By>;
  item_count?: InputMaybe<Order_By>;
  net_amount?: InputMaybe<Order_By>;
  profit?: InputMaybe<Order_By>;
  sold_items_aggregate?: InputMaybe<Sold_Items_Aggregate_Order_By>;
  transaction_date?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: sale_transactions */
export type Sale_Transactions_Pk_Columns_Input = {
  transaction_id: Scalars['String'];
};

/** select columns of table "sale_transactions" */
export type Sale_Transactions_Select_Column =
  /** column name */
  | 'customer_id'
  /** column name */
  | 'employee_id'
  /** column name */
  | 'item_count'
  /** column name */
  | 'net_amount'
  /** column name */
  | 'profit'
  /** column name */
  | 'transaction_date'
  /** column name */
  | 'transaction_id';

/** input type for updating data in table "sale_transactions" */
export type Sale_Transactions_Set_Input = {
  customer_id?: InputMaybe<Scalars['String']>;
  employee_id?: InputMaybe<Scalars['String']>;
  item_count?: InputMaybe<Scalars['Int']>;
  net_amount?: InputMaybe<Scalars['numeric']>;
  profit?: InputMaybe<Scalars['numeric']>;
  transaction_date?: InputMaybe<Scalars['date']>;
  transaction_id?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Sale_Transactions_Stddev_Fields = {
  __typename?: 'sale_transactions_stddev_fields';
  item_count?: Maybe<Scalars['Float']>;
  net_amount?: Maybe<Scalars['Float']>;
  profit?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "sale_transactions" */
export type Sale_Transactions_Stddev_Order_By = {
  item_count?: InputMaybe<Order_By>;
  net_amount?: InputMaybe<Order_By>;
  profit?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Sale_Transactions_Stddev_Pop_Fields = {
  __typename?: 'sale_transactions_stddev_pop_fields';
  item_count?: Maybe<Scalars['Float']>;
  net_amount?: Maybe<Scalars['Float']>;
  profit?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "sale_transactions" */
export type Sale_Transactions_Stddev_Pop_Order_By = {
  item_count?: InputMaybe<Order_By>;
  net_amount?: InputMaybe<Order_By>;
  profit?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Sale_Transactions_Stddev_Samp_Fields = {
  __typename?: 'sale_transactions_stddev_samp_fields';
  item_count?: Maybe<Scalars['Float']>;
  net_amount?: Maybe<Scalars['Float']>;
  profit?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "sale_transactions" */
export type Sale_Transactions_Stddev_Samp_Order_By = {
  item_count?: InputMaybe<Order_By>;
  net_amount?: InputMaybe<Order_By>;
  profit?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "sale_transactions" */
export type Sale_Transactions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Sale_Transactions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Sale_Transactions_Stream_Cursor_Value_Input = {
  customer_id?: InputMaybe<Scalars['String']>;
  employee_id?: InputMaybe<Scalars['String']>;
  item_count?: InputMaybe<Scalars['Int']>;
  net_amount?: InputMaybe<Scalars['numeric']>;
  profit?: InputMaybe<Scalars['numeric']>;
  transaction_date?: InputMaybe<Scalars['date']>;
  transaction_id?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Sale_Transactions_Sum_Fields = {
  __typename?: 'sale_transactions_sum_fields';
  item_count?: Maybe<Scalars['Int']>;
  net_amount?: Maybe<Scalars['numeric']>;
  profit?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "sale_transactions" */
export type Sale_Transactions_Sum_Order_By = {
  item_count?: InputMaybe<Order_By>;
  net_amount?: InputMaybe<Order_By>;
  profit?: InputMaybe<Order_By>;
};

/** update columns of table "sale_transactions" */
export type Sale_Transactions_Update_Column =
  /** column name */
  | 'customer_id'
  /** column name */
  | 'employee_id'
  /** column name */
  | 'item_count'
  /** column name */
  | 'net_amount'
  /** column name */
  | 'profit'
  /** column name */
  | 'transaction_date'
  /** column name */
  | 'transaction_id';

export type Sale_Transactions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Sale_Transactions_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Sale_Transactions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Sale_Transactions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Sale_Transactions_Var_Pop_Fields = {
  __typename?: 'sale_transactions_var_pop_fields';
  item_count?: Maybe<Scalars['Float']>;
  net_amount?: Maybe<Scalars['Float']>;
  profit?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "sale_transactions" */
export type Sale_Transactions_Var_Pop_Order_By = {
  item_count?: InputMaybe<Order_By>;
  net_amount?: InputMaybe<Order_By>;
  profit?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Sale_Transactions_Var_Samp_Fields = {
  __typename?: 'sale_transactions_var_samp_fields';
  item_count?: Maybe<Scalars['Float']>;
  net_amount?: Maybe<Scalars['Float']>;
  profit?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "sale_transactions" */
export type Sale_Transactions_Var_Samp_Order_By = {
  item_count?: InputMaybe<Order_By>;
  net_amount?: InputMaybe<Order_By>;
  profit?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Sale_Transactions_Variance_Fields = {
  __typename?: 'sale_transactions_variance_fields';
  item_count?: Maybe<Scalars['Float']>;
  net_amount?: Maybe<Scalars['Float']>;
  profit?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "sale_transactions" */
export type Sale_Transactions_Variance_Order_By = {
  item_count?: InputMaybe<Order_By>;
  net_amount?: InputMaybe<Order_By>;
  profit?: InputMaybe<Order_By>;
};

/** columns and relationships of "sold_items" */
export type Sold_Items = {
  __typename?: 'sold_items';
  /** An object relationship */
  inventory?: Maybe<Inventory>;
  item_id?: Maybe<Scalars['String']>;
  /** An object relationship */
  sale_transaction?: Maybe<Sale_Transactions>;
  sold_item_count: Scalars['bigint'];
  transaction_id?: Maybe<Scalars['String']>;
};

/** aggregated selection of "sold_items" */
export type Sold_Items_Aggregate = {
  __typename?: 'sold_items_aggregate';
  aggregate?: Maybe<Sold_Items_Aggregate_Fields>;
  nodes: Array<Sold_Items>;
};

export type Sold_Items_Aggregate_Bool_Exp = {
  count?: InputMaybe<Sold_Items_Aggregate_Bool_Exp_Count>;
};

export type Sold_Items_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Sold_Items_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Sold_Items_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "sold_items" */
export type Sold_Items_Aggregate_Fields = {
  __typename?: 'sold_items_aggregate_fields';
  avg?: Maybe<Sold_Items_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Sold_Items_Max_Fields>;
  min?: Maybe<Sold_Items_Min_Fields>;
  stddev?: Maybe<Sold_Items_Stddev_Fields>;
  stddev_pop?: Maybe<Sold_Items_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Sold_Items_Stddev_Samp_Fields>;
  sum?: Maybe<Sold_Items_Sum_Fields>;
  var_pop?: Maybe<Sold_Items_Var_Pop_Fields>;
  var_samp?: Maybe<Sold_Items_Var_Samp_Fields>;
  variance?: Maybe<Sold_Items_Variance_Fields>;
};


/** aggregate fields of "sold_items" */
export type Sold_Items_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Sold_Items_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "sold_items" */
export type Sold_Items_Aggregate_Order_By = {
  avg?: InputMaybe<Sold_Items_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Sold_Items_Max_Order_By>;
  min?: InputMaybe<Sold_Items_Min_Order_By>;
  stddev?: InputMaybe<Sold_Items_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Sold_Items_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Sold_Items_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Sold_Items_Sum_Order_By>;
  var_pop?: InputMaybe<Sold_Items_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Sold_Items_Var_Samp_Order_By>;
  variance?: InputMaybe<Sold_Items_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "sold_items" */
export type Sold_Items_Arr_Rel_Insert_Input = {
  data: Array<Sold_Items_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Sold_Items_On_Conflict>;
};

/** aggregate avg on columns */
export type Sold_Items_Avg_Fields = {
  __typename?: 'sold_items_avg_fields';
  sold_item_count?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "sold_items" */
export type Sold_Items_Avg_Order_By = {
  sold_item_count?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "sold_items". All fields are combined with a logical 'AND'. */
export type Sold_Items_Bool_Exp = {
  _and?: InputMaybe<Array<Sold_Items_Bool_Exp>>;
  _not?: InputMaybe<Sold_Items_Bool_Exp>;
  _or?: InputMaybe<Array<Sold_Items_Bool_Exp>>;
  inventory?: InputMaybe<Inventory_Bool_Exp>;
  item_id?: InputMaybe<String_Comparison_Exp>;
  sale_transaction?: InputMaybe<Sale_Transactions_Bool_Exp>;
  sold_item_count?: InputMaybe<Bigint_Comparison_Exp>;
  transaction_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "sold_items" */
export type Sold_Items_Constraint =
  /** unique or primary key constraint on columns "sold_item_count" */
  | 'sold_items_pkey';

/** input type for incrementing numeric columns in table "sold_items" */
export type Sold_Items_Inc_Input = {
  sold_item_count?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "sold_items" */
export type Sold_Items_Insert_Input = {
  inventory?: InputMaybe<Inventory_Obj_Rel_Insert_Input>;
  item_id?: InputMaybe<Scalars['String']>;
  sale_transaction?: InputMaybe<Sale_Transactions_Obj_Rel_Insert_Input>;
  sold_item_count?: InputMaybe<Scalars['bigint']>;
  transaction_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Sold_Items_Max_Fields = {
  __typename?: 'sold_items_max_fields';
  item_id?: Maybe<Scalars['String']>;
  sold_item_count?: Maybe<Scalars['bigint']>;
  transaction_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "sold_items" */
export type Sold_Items_Max_Order_By = {
  item_id?: InputMaybe<Order_By>;
  sold_item_count?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Sold_Items_Min_Fields = {
  __typename?: 'sold_items_min_fields';
  item_id?: Maybe<Scalars['String']>;
  sold_item_count?: Maybe<Scalars['bigint']>;
  transaction_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "sold_items" */
export type Sold_Items_Min_Order_By = {
  item_id?: InputMaybe<Order_By>;
  sold_item_count?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "sold_items" */
export type Sold_Items_Mutation_Response = {
  __typename?: 'sold_items_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Sold_Items>;
};

/** on_conflict condition type for table "sold_items" */
export type Sold_Items_On_Conflict = {
  constraint: Sold_Items_Constraint;
  update_columns?: Array<Sold_Items_Update_Column>;
  where?: InputMaybe<Sold_Items_Bool_Exp>;
};

/** Ordering options when selecting data from "sold_items". */
export type Sold_Items_Order_By = {
  inventory?: InputMaybe<Inventory_Order_By>;
  item_id?: InputMaybe<Order_By>;
  sale_transaction?: InputMaybe<Sale_Transactions_Order_By>;
  sold_item_count?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: sold_items */
export type Sold_Items_Pk_Columns_Input = {
  sold_item_count: Scalars['bigint'];
};

/** select columns of table "sold_items" */
export type Sold_Items_Select_Column =
  /** column name */
  | 'item_id'
  /** column name */
  | 'sold_item_count'
  /** column name */
  | 'transaction_id';

/** input type for updating data in table "sold_items" */
export type Sold_Items_Set_Input = {
  item_id?: InputMaybe<Scalars['String']>;
  sold_item_count?: InputMaybe<Scalars['bigint']>;
  transaction_id?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Sold_Items_Stddev_Fields = {
  __typename?: 'sold_items_stddev_fields';
  sold_item_count?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "sold_items" */
export type Sold_Items_Stddev_Order_By = {
  sold_item_count?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Sold_Items_Stddev_Pop_Fields = {
  __typename?: 'sold_items_stddev_pop_fields';
  sold_item_count?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "sold_items" */
export type Sold_Items_Stddev_Pop_Order_By = {
  sold_item_count?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Sold_Items_Stddev_Samp_Fields = {
  __typename?: 'sold_items_stddev_samp_fields';
  sold_item_count?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "sold_items" */
export type Sold_Items_Stddev_Samp_Order_By = {
  sold_item_count?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "sold_items" */
export type Sold_Items_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Sold_Items_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Sold_Items_Stream_Cursor_Value_Input = {
  item_id?: InputMaybe<Scalars['String']>;
  sold_item_count?: InputMaybe<Scalars['bigint']>;
  transaction_id?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Sold_Items_Sum_Fields = {
  __typename?: 'sold_items_sum_fields';
  sold_item_count?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "sold_items" */
export type Sold_Items_Sum_Order_By = {
  sold_item_count?: InputMaybe<Order_By>;
};

/** update columns of table "sold_items" */
export type Sold_Items_Update_Column =
  /** column name */
  | 'item_id'
  /** column name */
  | 'sold_item_count'
  /** column name */
  | 'transaction_id';

export type Sold_Items_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Sold_Items_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Sold_Items_Set_Input>;
  /** filter the rows which have to be updated */
  where: Sold_Items_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Sold_Items_Var_Pop_Fields = {
  __typename?: 'sold_items_var_pop_fields';
  sold_item_count?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "sold_items" */
export type Sold_Items_Var_Pop_Order_By = {
  sold_item_count?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Sold_Items_Var_Samp_Fields = {
  __typename?: 'sold_items_var_samp_fields';
  sold_item_count?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "sold_items" */
export type Sold_Items_Var_Samp_Order_By = {
  sold_item_count?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Sold_Items_Variance_Fields = {
  __typename?: 'sold_items_variance_fields';
  sold_item_count?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "sold_items" */
export type Sold_Items_Variance_Order_By = {
  sold_item_count?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "customers" */
  customers: Array<Customers>;
  /** fetch aggregated fields from the table: "customers" */
  customers_aggregate: Customers_Aggregate;
  /** fetch data from the table: "customers" using primary key columns */
  customers_by_pk?: Maybe<Customers>;
  /** fetch data from the table in a streaming manner: "customers" */
  customers_stream: Array<Customers>;
  /** fetch data from the table: "employees" */
  employees: Array<Employees>;
  /** fetch aggregated fields from the table: "employees" */
  employees_aggregate: Employees_Aggregate;
  /** fetch data from the table: "employees" using primary key columns */
  employees_by_pk?: Maybe<Employees>;
  /** fetch data from the table in a streaming manner: "employees" */
  employees_stream: Array<Employees>;
  /** fetch data from the table: "inventory" */
  inventory: Array<Inventory>;
  /** fetch aggregated fields from the table: "inventory" */
  inventory_aggregate: Inventory_Aggregate;
  /** fetch data from the table: "inventory" using primary key columns */
  inventory_by_pk?: Maybe<Inventory>;
  /** fetch data from the table in a streaming manner: "inventory" */
  inventory_stream: Array<Inventory>;
  /** An array relationship */
  sale_transactions: Array<Sale_Transactions>;
  /** An aggregate relationship */
  sale_transactions_aggregate: Sale_Transactions_Aggregate;
  /** fetch data from the table: "sale_transactions" using primary key columns */
  sale_transactions_by_pk?: Maybe<Sale_Transactions>;
  /** fetch data from the table in a streaming manner: "sale_transactions" */
  sale_transactions_stream: Array<Sale_Transactions>;
  /** An array relationship */
  sold_items: Array<Sold_Items>;
  /** An aggregate relationship */
  sold_items_aggregate: Sold_Items_Aggregate;
  /** fetch data from the table: "sold_items" using primary key columns */
  sold_items_by_pk?: Maybe<Sold_Items>;
  /** fetch data from the table in a streaming manner: "sold_items" */
  sold_items_stream: Array<Sold_Items>;
};


export type Subscription_RootCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Subscription_RootCustomers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Subscription_RootCustomers_By_PkArgs = {
  customer_id: Scalars['String'];
};


export type Subscription_RootCustomers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Customers_Stream_Cursor_Input>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Subscription_RootEmployeesArgs = {
  distinct_on?: InputMaybe<Array<Employees_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Employees_Order_By>>;
  where?: InputMaybe<Employees_Bool_Exp>;
};


export type Subscription_RootEmployees_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Employees_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Employees_Order_By>>;
  where?: InputMaybe<Employees_Bool_Exp>;
};


export type Subscription_RootEmployees_By_PkArgs = {
  employee_id: Scalars['String'];
};


export type Subscription_RootEmployees_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Employees_Stream_Cursor_Input>>;
  where?: InputMaybe<Employees_Bool_Exp>;
};


export type Subscription_RootInventoryArgs = {
  distinct_on?: InputMaybe<Array<Inventory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Inventory_Order_By>>;
  where?: InputMaybe<Inventory_Bool_Exp>;
};


export type Subscription_RootInventory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Inventory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Inventory_Order_By>>;
  where?: InputMaybe<Inventory_Bool_Exp>;
};


export type Subscription_RootInventory_By_PkArgs = {
  item_id: Scalars['String'];
};


export type Subscription_RootInventory_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Inventory_Stream_Cursor_Input>>;
  where?: InputMaybe<Inventory_Bool_Exp>;
};


export type Subscription_RootSale_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Sale_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sale_Transactions_Order_By>>;
  where?: InputMaybe<Sale_Transactions_Bool_Exp>;
};


export type Subscription_RootSale_Transactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sale_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sale_Transactions_Order_By>>;
  where?: InputMaybe<Sale_Transactions_Bool_Exp>;
};


export type Subscription_RootSale_Transactions_By_PkArgs = {
  transaction_id: Scalars['String'];
};


export type Subscription_RootSale_Transactions_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Sale_Transactions_Stream_Cursor_Input>>;
  where?: InputMaybe<Sale_Transactions_Bool_Exp>;
};


export type Subscription_RootSold_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Sold_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sold_Items_Order_By>>;
  where?: InputMaybe<Sold_Items_Bool_Exp>;
};


export type Subscription_RootSold_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sold_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sold_Items_Order_By>>;
  where?: InputMaybe<Sold_Items_Bool_Exp>;
};


export type Subscription_RootSold_Items_By_PkArgs = {
  sold_item_count: Scalars['bigint'];
};


export type Subscription_RootSold_Items_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Sold_Items_Stream_Cursor_Input>>;
  where?: InputMaybe<Sold_Items_Bool_Exp>;
};

export type CreateCustomerMutationVariables = Exact<{
  customer_id?: InputMaybe<Scalars['String']>;
  email_address?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
}>;


export type CreateCustomerMutation = { __typename?: 'mutation_root', insert_customers_one?: { __typename?: 'customers', email_address?: string | null, first_name?: string | null, last_name?: string | null } | null };

export type DeleteCustomerByPkMutationVariables = Exact<{
  customer_id: Scalars['String'];
}>;


export type DeleteCustomerByPkMutation = { __typename?: 'mutation_root', delete_customers_by_pk?: { __typename?: 'customers', email_address?: string | null, first_name?: string | null, last_name?: string | null } | null };

export type GetCustomersLikeNameQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  first_name_term?: InputMaybe<Scalars['String']>;
}>;


export type GetCustomersLikeNameQuery = { __typename?: 'query_root', customers: Array<{ __typename?: 'customers', email_address?: string | null, first_name?: string | null, last_name?: string | null }> };

export type StreamCustomersByFnSubscriptionVariables = Exact<{
  fn_ilike?: InputMaybe<Scalars['String']>;
}>;


export type StreamCustomersByFnSubscription = { __typename?: 'subscription_root', customers_stream: Array<{ __typename?: 'customers', email_address?: string | null, first_name?: string | null, last_name?: string | null }> };

export type SubGetCustomersLikeNameSubscriptionVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  fn_like?: InputMaybe<Scalars['String']>;
}>;


export type SubGetCustomersLikeNameSubscription = { __typename?: 'subscription_root', customers: Array<{ __typename?: 'customers', email_address?: string | null, first_name?: string | null, last_name?: string | null }> };


export const CreateCustomerDocument = gql`
    mutation CreateCustomer($customer_id: String, $email_address: String, $last_name: String, $first_name: String) {
  insert_customers_one(
    object: {email_address: $email_address, customer_id: $customer_id, last_name: $last_name, first_name: $first_name}
  ) {
    email_address
    first_name
    last_name
  }
}
    `;
export type CreateCustomerMutationFn = Apollo.MutationFunction<CreateCustomerMutation, CreateCustomerMutationVariables>;

/**
 * __useCreateCustomerMutation__
 *
 * To run a mutation, you first call `useCreateCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCustomerMutation, { data, loading, error }] = useCreateCustomerMutation({
 *   variables: {
 *      customer_id: // value for 'customer_id'
 *      email_address: // value for 'email_address'
 *      last_name: // value for 'last_name'
 *      first_name: // value for 'first_name'
 *   },
 * });
 */
export function useCreateCustomerMutation(baseOptions?: Apollo.MutationHookOptions<CreateCustomerMutation, CreateCustomerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCustomerMutation, CreateCustomerMutationVariables>(CreateCustomerDocument, options);
      }
export type CreateCustomerMutationHookResult = ReturnType<typeof useCreateCustomerMutation>;
export type CreateCustomerMutationResult = Apollo.MutationResult<CreateCustomerMutation>;
export type CreateCustomerMutationOptions = Apollo.BaseMutationOptions<CreateCustomerMutation, CreateCustomerMutationVariables>;
export const DeleteCustomerByPkDocument = gql`
    mutation DeleteCustomerByPK($customer_id: String!) {
  delete_customers_by_pk(customer_id: $customer_id) {
    email_address
    first_name
    last_name
  }
}
    `;
export type DeleteCustomerByPkMutationFn = Apollo.MutationFunction<DeleteCustomerByPkMutation, DeleteCustomerByPkMutationVariables>;

/**
 * __useDeleteCustomerByPkMutation__
 *
 * To run a mutation, you first call `useDeleteCustomerByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCustomerByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCustomerByPkMutation, { data, loading, error }] = useDeleteCustomerByPkMutation({
 *   variables: {
 *      customer_id: // value for 'customer_id'
 *   },
 * });
 */
export function useDeleteCustomerByPkMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCustomerByPkMutation, DeleteCustomerByPkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCustomerByPkMutation, DeleteCustomerByPkMutationVariables>(DeleteCustomerByPkDocument, options);
      }
export type DeleteCustomerByPkMutationHookResult = ReturnType<typeof useDeleteCustomerByPkMutation>;
export type DeleteCustomerByPkMutationResult = Apollo.MutationResult<DeleteCustomerByPkMutation>;
export type DeleteCustomerByPkMutationOptions = Apollo.BaseMutationOptions<DeleteCustomerByPkMutation, DeleteCustomerByPkMutationVariables>;
export const GetCustomersLikeNameDocument = gql`
    query GetCustomersLikeName($limit: Int, $first_name_term: String) {
  customers(limit: $limit, where: {first_name: {_like: $first_name_term}}) {
    email_address
    first_name
    last_name
  }
}
    `;

/**
 * __useGetCustomersLikeNameQuery__
 *
 * To run a query within a React component, call `useGetCustomersLikeNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomersLikeNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomersLikeNameQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      first_name_term: // value for 'first_name_term'
 *   },
 * });
 */
export function useGetCustomersLikeNameQuery(baseOptions?: Apollo.QueryHookOptions<GetCustomersLikeNameQuery, GetCustomersLikeNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCustomersLikeNameQuery, GetCustomersLikeNameQueryVariables>(GetCustomersLikeNameDocument, options);
      }
export function useGetCustomersLikeNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCustomersLikeNameQuery, GetCustomersLikeNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCustomersLikeNameQuery, GetCustomersLikeNameQueryVariables>(GetCustomersLikeNameDocument, options);
        }
export type GetCustomersLikeNameQueryHookResult = ReturnType<typeof useGetCustomersLikeNameQuery>;
export type GetCustomersLikeNameLazyQueryHookResult = ReturnType<typeof useGetCustomersLikeNameLazyQuery>;
export type GetCustomersLikeNameQueryResult = Apollo.QueryResult<GetCustomersLikeNameQuery, GetCustomersLikeNameQueryVariables>;
export const StreamCustomersByFnDocument = gql`
    subscription StreamCustomersByFN($fn_ilike: String) {
  customers_stream(
    batch_size: 10
    cursor: {initial_value: {first_name: ""}, ordering: ASC}
    where: {first_name: {_ilike: $fn_ilike}}
  ) {
    email_address
    first_name
    last_name
  }
}
    `;

/**
 * __useStreamCustomersByFnSubscription__
 *
 * To run a query within a React component, call `useStreamCustomersByFnSubscription` and pass it any options that fit your needs.
 * When your component renders, `useStreamCustomersByFnSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStreamCustomersByFnSubscription({
 *   variables: {
 *      fn_ilike: // value for 'fn_ilike'
 *   },
 * });
 */
export function useStreamCustomersByFnSubscription(baseOptions?: Apollo.SubscriptionHookOptions<StreamCustomersByFnSubscription, StreamCustomersByFnSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<StreamCustomersByFnSubscription, StreamCustomersByFnSubscriptionVariables>(StreamCustomersByFnDocument, options);
      }
export type StreamCustomersByFnSubscriptionHookResult = ReturnType<typeof useStreamCustomersByFnSubscription>;
export type StreamCustomersByFnSubscriptionResult = Apollo.SubscriptionResult<StreamCustomersByFnSubscription>;
export const SubGetCustomersLikeNameDocument = gql`
    subscription SubGetCustomersLikeName($limit: Int, $fn_like: String) {
  customers(limit: $limit, where: {first_name: {_like: $fn_like}}) {
    email_address
    first_name
    last_name
  }
}
    `;

/**
 * __useSubGetCustomersLikeNameSubscription__
 *
 * To run a query within a React component, call `useSubGetCustomersLikeNameSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubGetCustomersLikeNameSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubGetCustomersLikeNameSubscription({
 *   variables: {
 *      limit: // value for 'limit'
 *      fn_like: // value for 'fn_like'
 *   },
 * });
 */
export function useSubGetCustomersLikeNameSubscription(baseOptions?: Apollo.SubscriptionHookOptions<SubGetCustomersLikeNameSubscription, SubGetCustomersLikeNameSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<SubGetCustomersLikeNameSubscription, SubGetCustomersLikeNameSubscriptionVariables>(SubGetCustomersLikeNameDocument, options);
      }
export type SubGetCustomersLikeNameSubscriptionHookResult = ReturnType<typeof useSubGetCustomersLikeNameSubscription>;
export type SubGetCustomersLikeNameSubscriptionResult = Apollo.SubscriptionResult<SubGetCustomersLikeNameSubscription>;