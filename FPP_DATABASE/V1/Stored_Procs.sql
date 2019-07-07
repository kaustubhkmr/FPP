
--add user
USE fpp



--get customer
CREATE PROC get_user(@cust_id bigint)
AS
SELECT * FROM dbo.customers WHERE cust_id=@cust_id


--add customer
CREATE PROC add_cust(
@cust_name VARCHAR(100) ,
@cust_phone CHAR(10),
@cust_email VARCHAR(100) ,
@cust_address VARCHAR(400) ,
@cust_city VARCHAR(25) ,
@cust_state VARCHAR(25),
@cust_password VARCHAR(1000) 
)
AS
INSERT INTO dbo.customers
(
    cust_id,
    cust_name,
    cust_phone,
    cust_email,
    cust_address,
    cust_city,
    cust_state,
    cust_password
)
VALUES
(   NEXT VALUE FOR dbo.cust_seq,  -- cust_id - bigint
   @cust_name ,
@cust_phone ,
@cust_email,
@cust_address ,
@cust_city  ,
@cust_state ,
@cust_password 
    )



--update customers
CREATE PROC upd_cust
(@cust_id bigint,
@cust_name VARCHAR(100) ,
@cust_phone CHAR(10),
@cust_email VARCHAR(100) ,
@cust_address VARCHAR(400) ,
@cust_city VARCHAR(25) ,
@cust_state VARCHAR(25)
)
AS
UPDATE dbo.customers SET
cust_name=@cust_name ,
cust_phone=@cust_phone ,
cust_email=@cust_email,
cust_address=@cust_address ,
cust_city=@cust_city  ,
cust_state=@cust_state
WHERE cust_id=@cust_id


--add suppliers
CREATE PROC add_sup(
@sup_name VARCHAR(100) ,
@sup_email VARCHAR(100) ,
@sup_phone CHAR(10),
@sup_city VARCHAR(25) ,
@sup_state VARCHAR(25) ,
@sup_password VARCHAR(1000) 
)
AS
INSERT INTO dbo.suppliers
(
  sup_id,
    sup_name,
    sup_email,
    sup_phone,
    sup_city,
    sup_state,
    sup_password
    
)
VALUES
(   NEXT VALUE FOR dbo.sup_sequence,  -- sup_id - bigint
    @sup_name,
    @sup_email,
    @sup_phone,
    @sup_city,
    @sup_state,
    @sup_password
    
    )



--get suppliers
CREATE PROC get_sup(@sup_id bigint)
AS
SELECT * FROM dbo.suppliers WHERE sup_id=@sup_id





--updating suppliers
CREATE PROC upd_sup(@sup_id bigint,
@sup_name VARCHAR(100) ,
@sup_email VARCHAR(100) ,
@sup_phone CHAR(10),
@sup_city VARCHAR(25) ,
@sup_state VARCHAR(25) )
AS
UPDATE dbo.suppliers SET
sup_name=@sup_name,
sup_email=@sup_email,
sup_phone=@sup_phone,
sup_city=@sup_city ,
sup_state=@sup_state 
WHERE sup_id=@sup_id

--adding a service
CREATE PROC add_service(@sup_id bigint, @service_name varchar(100))
AS
INSERT INTO sup_services VALUES (NEXT VALUE FOR service_seq,@sup_id,@service_name)

--getting supplier's services
CREATE PROC get_my_services(@sup_id bigint)
AS
SELECT * FROM sup_services WHERE sup_id=@sup_id

--TODO: make procedure for delete of service, user,supplier and bookings. Also make a procedure to update bookings


--give rating to supplier. DO THIS LOGIC IN FRONT END
CREATE PROC give_rating(@sup_id bigint,@rating float(5))
AS
UPDATE dbo.suppliers SET sup_rating=@rating, rating_count=rating_count+1 WHERE sup_id=@sup_id

--add bookings
CREATE PROC add_booking(
@bid bigint,
@cust_id bigint,
@sup_id bigint,
@b_address VARCHAR(100) ,
@b_city VARCHAR(100) ,
@b_state VARCHAR(100),
@b_time TIME ,
@b_date DATETIME2,
@req_time TIME ,
@req_date DATETIME,
@s_type VARCHAR(50)
)
AS
INSERT INTO dbo.bookings
(
    b_id,
    cust_id,
    sup_id,
    b_address,
    b_city,
    b_state,
    b_time,
    b_date,
    
    req_time,
    req_date,
	s_type
   
)
VALUES
(  
@bid ,
@cust_id ,
@sup_id ,
@b_address  ,
@b_city  ,
@b_state ,
@b_time  ,
@b_date ,
@req_time ,
@req_date ,
@s_type 
   
)

--get booking
CREATE PROC get_booking(@bid bigint)
AS
SELECT * FROM dbo.bookings WHERE b_id=@bid

--add comments
CREATE PROC add_comments(@bid bigint,@comments varchar(200))
AS
UPDATE dbo.bookings SET comments=@comments WHERE b_id=@bid

--complete booking
CREATE PROC complete_booking(@bid bigint)
AS
UPDATE dbo.bookings SET completion_status='T',completion_time=SYSDATETIME() WHERE b_id=@bid

--make payment
CREATE PROC make_payment(@bid bigint, @money money)
AS
UPDATE dbo.bookings SET payment_status='T', b_price=@money WHERE b_id=@bid




    


