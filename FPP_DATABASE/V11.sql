create procedure get_booking_count_for_sup
as 
select count(*) from bookings;

alter procedure get_booking_count_for_sup (@sup_id BIGINT)
as 
select count(*) from bookings where sup_id = @sup_id;


get_booking_count_for_sup 106


select * from bookings
