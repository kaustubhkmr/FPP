----- kasuhtubh laptop--------


create proc get_booking_suppliers(@service_name varchar(100))
AS
select sup_id,sup_name,sup_state from suppliers where sup_id in(select sup_id from sup_services where service_name=@service_name)







---- Harshit laptop ----

CREATE PROC get_supplierd_services(@sup_id bigint)
	AS 
	SELECT * FROM dbo.sup_services WHERE sup_id = @sup_id;

	

CREATE PROC get_supplier1(@sup_id bigint)
	AS
    select * FROM dbo.suppliers WHERE sup_id=@sup_id


CREATE PROC get_all_booking_suppliers(@service_name varchar(100))
AS
select * from suppliers where sup_id in(select sup_id from sup_services where service_name=@service_name)


CREATE PROC add_bookings(
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
NEXT VALUE FOR dbo.booking_sequence ,
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


alter PROC add_bookings(
@cust_id bigint,
@sup_id bigint,
@b_address VARCHAR(100) ,
@b_city VARCHAR(100) ,
@b_state VARCHAR(100),
@b_time TIME ,
@b_date DATETIME2,

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
NEXT VALUE FOR dbo.booking_sequence ,
@cust_id ,
@sup_id ,
@b_address  ,
@b_city  ,
@b_state ,
@b_time  ,
@b_date ,
CAST(CURRENT_TIMESTAMP AS TIME),
GETDATE(),
@s_type 
   
)
