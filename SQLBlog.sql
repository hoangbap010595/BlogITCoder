select * from AspNetUsers

select * from [dbo].[AspNetUsers] u 
inner join [dbo].[ObjUsers] o on u.Id = o.UserID

--drop table ObjUsers
create table ObjUsers(
	Id int identity(1,1) primary key
	, UserID nvarchar(128)
	, DisplayName nvarchar(128)
	, FirstName nvarchar(32)
	, LastName nvarchar(32)
	, FullName nvarchar(64)
	, DateOfBirth datetime
	, [Address1] nvarchar(1024)
	, [Address2] nvarchar(1024)
	, Passport nvarchar(32)
	, Avatar nvarchar(2048)
	, [Status] int
	, DateCreate datetime
	, DateUpdate datetime
)
GO
--drop table LogObjUsers
create table LogObjUsers(
	Id int identity(1,1) primary key
	, UserID nvarchar(128)
	, IpAddress nvarchar(64)
	, Device nvarchar(64)
	, Browser nvarchar(64)
	, [Status] bit
	, LastLogin datetime
	, LastLogout datetime
	, TimeActive int
)
GO
--drop table BlogCategory
create table BlogCategory(
	ID int identity(1,10) primary key
	, Name nvarchar(64)
	, NameClean nvarchar(64)
	, [Enable] bit
	, DateCreate datetime
)
GO
--drop table BlogPost
create table BlogPost(
	ID int identity(1,1) primary key
	, UserID nvarchar(128)
	, Title nvarchar(512)
	, Artical nvarchar(max)
	, TitleClean nvarchar(512)
	, [File] varchar(56)
	, DateCreate datetime
	, DatePublish datetime
	, DateUpdate datetime
	, UpdateBy datetime
	, BannerImage varchar(56)
	, Featured bit
	, [Enable] bit
	, CommentEnable bit
	, [Views] int
	, [Like] int
	, Share int
)
GO
--drop table BlogComment
create table BlogComment(
	ID int identity(1,1) primary key
	, PostID int
	, UserID nvarchar(128)
	, ReplyToID int
	, Comment nvarchar(max)
	, MarkRead bit
	, [Enable] bit
	, DateComment datetime
)
GO
--drop table BlogTag
create table BlogTag(
	ID int identity(2,2) primary key
	, PostID int
	, Tag nvarchar(128)
	, TagClean nvarchar(128)
)
GO
--drop table BlogPostCategory
create table BlogPostCategory(
	CategoryID int
	, PostID int
	primary key (CategoryID, PostID)
)