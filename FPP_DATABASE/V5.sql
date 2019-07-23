CREATE PROCEDURE get_supplier_bookings (@sup_id BIGINT) 
AS
SELECT * FROM dbo.bookings WHERE sup_id = @sup_id;


CREATE PROC cust_login(@email varchar(100), @pwd VARCHAR(1000))
AS
SELECT * FROM customers WHERE cust_email=@email AND cust_password=@pwd
 
 CREATE PROC sup_login(@email varchar(100), @pwd VARCHAR(1000))
AS
SELECT * FROM suppliers WHERE sup_email=@email AND sup_password=@pwd
 
CREATE PROC upd_booking_status (@b_id BIGINT, @b_status VARCHAR(5))
AS
update bookings SET b_accepted = @b_status WHERE b_id=@b_id; 


alter PROC make_payment(@bid bigint)
AS
UPDATE dbo.bookings SET payment_status='T' WHERE b_id=@bid

SELECT * FROM bookings;



