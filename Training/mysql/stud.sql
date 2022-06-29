SELECT * FROM matrimony.student;
select studname,english from student where english >=50;
select studname,maths from student where maths >=50;
select studname,total,if(total>=110,"pass","fail") as status from student; 
select * from student;
insert into student(id,studname,english,maths,total) value('6','shanu','85','45','130');
insert into student(id,studname,english,maths,total) value('7','anu','','45','130');
insert into student(id,studname,english,maths,total) value('5','sree','85','45','');


select studname,count(studname) from student group by studname having count(studname)>1; 

select * from student where  english is null or english='' ;
select * from student where trim(english) is null; 
select * from tblusers where txtname="anjana" and txtpassword="123";
insert into tblusers(txtname,txtmobileno) values('archana','126546');
update tblusers set txtname='nijila',txtpassword='1245' where id=2;