---------V8----------
SELECT * FROM bookings

ALTER TABLE bookings ADD  b_pricetag varchar(20) DEFAULT '0'

CREATE PROC upd_tag(@b_tag varchar(20))
AS
UPDATE dbo.bookings SET b_pricetag=@b_tag WHERE b_id=(SELECT TOP 1 b_id FROM dbo.bookings ORDER BY b_id DESC)

CREATE PROCEDURE get_client_bookings1 (@cust_id BIGINT) 
AS
SELECT * FROM dbo.bookings WHERE cust_id = @cust_id;

get_client_bookings1 7

CREATE PROCEDURE get_supplier_bookings1 (@sup_id BIGINT) 
AS
SELECT * FROM dbo.bookings WHERE sup_id = @sup_id;

CREATE PROCEDURE upd_price(@b_id bigint,@b_price money)
AS
UPDATE bookings SET b_price=@b_price WHERE b_id=@b_id


CREATE TABLE custom_service(
c_id BIGINT PRIMARY KEY,
sup_id bigint REFERENCES suppliers(sup_id),
c_name VARCHAR(20) NOT NULL,
c_message VARCHAR(100) NOT NULL,
c_pricetag VARCHAR(20) NOT null
)

CREATE SEQUENCE custom_seq
START WITH 50
INCREMENT BY 1

CREATE PROC insert_custom_service(@sup_id bigint,@cname varchar(20),@c_message varchar(100),@c_pricetag varchar(20))
AS
INSERT INTO dbo.custom_service
(
    c_id,
    sup_id,
    c_name,
    c_message,
    c_pricetag
)
VALUES
(   NEXT VALUE FOR custom_seq,  -- c_id - bigint
    @sup_id,  -- sup_id - bigint
    @cname, -- c_name - varchar(20)
    @c_message, -- c_message - varchar(100)
    @c_pricetag  -- c_pricetag - varchar(20)
    )
	select * from custom_service

	create proc get_custom_service(@sup_id bigint)
	as
	select * from custom_service where sup_id=@sup_id

	alter table custom_service add constraint id_name_unique unique(c_name,sup_id)
	
	

	create proc get_distinct_custom_services
	as
	select distinct c_name from custom_service

	create proc get_all_distinct_custom_services
	as
	select * from custom_service where c_name in( select distinct c_name from custom_service)

	 select distinct c_name from custom_service
	select * from custom_service;
	
	create proc get_custom_booking_suppliers(@cname varchar(20))
	as
	select * from suppliers where sup_id in(select sup_id from custom_service where c_name=@cname)

	get_custom_booking_suppliers 'MyService'

	create proc get_custom_booking_prices(@sup_id bigint, @cname varchar(20))
	as
	select * from custom_service where sup_id=@sup_id and c_name=@cname

	get_custom_booking_prices 129, 'MyService'

	