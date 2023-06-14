drop schema tests cascade;
create schema tests;

create table tests.enrollment (
	id_enrollment integer,
	student_name text,
	course_code text,
	average numeric
);

create table tests.grade (
	id_grade integer,
	id_enrollment integer,
	exam_code text,
	value numeric,
	weight numeric
);

insert into tests.enrollment (id_enrollment, student_name, course_code, average) values (1, 'Rodrigo Branas', 'CCCAT12', 0);
insert into tests.grade (id_grade, id_enrollment, exam_code, value, weight) values (1, 1, 'E1', 10, 0.3);
insert into tests.grade (id_grade, id_enrollment, exam_code, value, weight) values (2, 1, 'E2', 9, 0.3);
insert into tests.grade (id_grade, id_enrollment, exam_code, value, weight) values (3, 1, 'E3', 8, 0.4);
