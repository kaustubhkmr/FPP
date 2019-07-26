CREATE PROC get_booking_cust_names(@bid bigint)
AS
SELECT * FROM bookings b INNER JOIN customers c ON b.cust_id=c.cust_id WHERE b.b_id=@bid

get_booking_cust_names 1005

CREATE PROC get_booking_sup_names(@bid bigint)
AS
SELECT * FROM bookings b INNER JOIN suppliers s ON b.sup_id=s.sup_id WHERE b.b_id=@bid

ALTER PROC get_booking_cust_names(@bid bigint)
AS
SELECT * FROM customers WHERE cust_id=(SELECT cust_id FROM dbo.bookings WHERE b_id=@bid)

ALTER PROC get_booking_sup_names(@bid bigint)
AS
SELECT * FROM dbo.suppliers WHERE sup_id=(SELECT sup_id FROM dbo.bookings WHERE b_id=@bid)

--use these
create PROC get_booking_cust_names1(@bid bigint)
AS
SELECT * FROM customers WHERE cust_id=(SELECT cust_id FROM dbo.bookings WHERE b_id=@bid)

CREATE PROC get_booking_sup_names1(@bid bigint)
AS
SELECT * FROM dbo.suppliers WHERE sup_id=(SELECT sup_id FROM dbo.bookings WHERE b_id=@bid)
