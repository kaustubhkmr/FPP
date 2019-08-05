--V10-----

	create table admin_table
	(a_email varchar(100) not null,
	a_password varchar(1000) not null
	)
	
	insert into admin_table values('admin@gmail.com','admin@1122')

	create proc get_admin(@email varchar(100), @pwd varchar(1000))
	as
	select * from admin_table
	
	create proc get_admin1
	as
	select * from admin_table
