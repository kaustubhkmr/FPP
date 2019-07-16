USE fpp

--extra details like email or phone number can be added
CREATE TABLE customers(
cust_id BIGINT PRIMARY KEY,
cust_name VARCHAR(100) CONSTRAINT name_no_null NOT NULL,
cust_phone CHAR(10)CONSTRAINT phone_no_null NOT NULL CONSTRAINT phone_unique UNIQUE CHECK(LEN(cust_phone)=10),
cust_email VARCHAR(100) CONSTRAINT email_not_null NOT NULL CONSTRAINT email_unique UNIQUE ,
cust_address VARCHAR(400) CONSTRAINT address_no_null NOT NULL,
cust_city VARCHAR(25) CONSTRAINT city_no_null NOT NULL,
cust_state VARCHAR(25) CONSTRAINT state_no_null NOT NULL,
cust_password VARCHAR(1000) CONSTRAINT password_no_null NOT NULL
)


SELECT * FROM dbo.customers

--same details as customers can be added
CREATE TABLE suppliers(
sup_id BIGINT CONSTRAINT sp_pk PRIMARY KEY,
sup_name VARCHAR(100) CONSTRAINT sp_name NOT NULL,
sup_email VARCHAR(100) CONSTRAINT sp_email NOT NULL UNIQUE,
sup_phone CHAR(10)CONSTRAINT sup_phone_no_null NOT NULL CONSTRAINT sup_phone_unique UNIQUE CHECK(LEN(sup_phone)=10),
sup_city VARCHAR(25) CONSTRAINT scity_no_null NOT NULL,
sup_state VARCHAR(25) CONSTRAINT state_no_null NOT NULL,
sup_password VARCHAR(1000) CONSTRAINT spassword_no_null NOT NULL,

sup_rating FLOAT(5)
)



DROP TABLE suppliers
--unique booking constraint to be added
CREATE TABLE bookings(
b_id BIGINT PRIMARY KEY,
cust_id BIGINT CONSTRAINT c_fk REFERENCES dbo.customers(cust_id) ON DELETE SET NULL,
sup_id BIGINT CONSTRAINT s_fk REFERENCES dbo.suppliers(sup_id) ON DELETE SET NULL,
b_address VARCHAR(100) NOT NULL,
b_city VARCHAR(100) NOT NULL,
b_state VARCHAR(100) NOT NULL,
b_time TIME NOT NULL,
b_date DATETIME2 NOT NULL,
b_price MONEY NOT NULL DEFAULT 0,
payment_status CHAR(1) NOT NULL CHECK(payment_status IN('T','F')) DEFAULT 'F',
completion_status CHAR(1) NOT NULL CHECK(completion_status IN('T','F')) DEFAULT 'F',
req_time TIME NOT NULL,
req_date DATETIME NOT NULL,
b_review VARCHAR(100) 


)
--services aux table can be added

DROP TABLE bookings
CREATE SEQUENCE cust_seq
START WITH 1
INCREMENT BY 1

CREATE SEQUENCE sup_sequence
START WITH 100
INCREMENT BY 1

CREATE SEQUENCE booking_sequence
START WITH 1000
INCREMENT BY 1

USE fpp

DROP SEQUENCE dbo.booking_sequence
DROP SEQUENCE dbo.sup_sequence

USE fpp

ALTER TABLE dbo.bookings ADD s_type VARCHAR(50) NOT NULL, completion_time DATETIME2 ,comments VARCHAR(200)

USE fpp
ALTER TABLE dbo.suppliers DROP COLUMN sup_service

CREATE TABLE sup_services(
service_id BIGINT PRIMARY KEY,
sup_id BIGINT REFERENCES dbo.suppliers(sup_id) ON DELETE CASCADE,
service_name VARCHAR(100) NOT null

)

CREATE SEQUENCE service_seq
START WITH 20
INCREMENT BY 1

ALTER TABLE dbo.suppliers ADD rating_count BIGINT DEFAULT 0

USE fpp

ALTER TABLE dbo.suppliers ADD sup_address VARCHAR(100)