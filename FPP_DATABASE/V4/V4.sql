ALTER TABLE dbo.bookings ADD b_accepted VARCHAR(5) DEFAULT('F')



CREATE PROC get_booking1(@bid bigint)
AS
SELECT * FROM dbo.bookings WHERE b_id=@bid


