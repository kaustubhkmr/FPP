CREATE PROCEDURE get_client_bookings (@cust_id BIGINT) 
AS
SELECT * FROM dbo.bookings WHERE cust_id = @cust_id; 




