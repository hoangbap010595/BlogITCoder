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
	Id int identity(1,1)
	, UserID nvarchar(128)
	, IpAddress nvarchar(64)
	, Device nvarchar(64)
	, Browser nvarchar(64)
	, [Status] bit
	, LastLogin datetime
	, LastLogout datetime
	, TimeActive int
	primary key (Id, UserID)
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
	, UpdateBy nvarchar(56)
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

--23-10-2017 
Create Table Country(
	Id int identity(1,10) primary key,
	Name nvarchar(128),
	Code nvarchar(32)
)
select * from Country where name like '%viet%'
--Insert
GO
INSERT INTO [dbo].[Country]
           ([Name]
           ,[Code])VALUES ('Afghanistan','+93'),('Armenia','+374'),('Azerbaijan','+994'),('Bahrain','+973'),('Bangladesh','+880'),('Bhutan','+975'),('Brunei','+673'),('Cambodia','+855'),('China','+86'),('East Timor','+670'),('Georgia','+995'),('Hong Kong','+852'),('India','+91'),('Indonesia','+62'),('Iran','+98'),('Iraq','+964'),('Israel','+972'),('Japan','+81'),('Jordan','+962'),(N'Korea Dem People''s Rep','+850'),('Korea Republic of','+82'),('Kuwait','+965'),('Kyrgyzstan','+996'),('Laos PDR','+856'),('Lebanon','+961'),('Macau','+853'),('Malaysia','+60'),('Maldives','+960'),('Mongolia','+976'),('Myanmar','+95'),('Nepal','+977'),('Oman','+968'),('Pakistan','+92'),('Palestinian Territory','+970'),('Philippines','+63'),('Qatar','+974'),('Russia/Kazakhstan','+7'),('Saudi Arabia','+966'),('Singapore','+65'),('Sri Lanka','+94'),('Syria','+963'),('Taiwan','+886'),('Tajikistan','+992'),('Thailand','+66'),('Turkey','+90'),('Turkish Republic of Northern Cyprus','+90'),('Turkmenistan','+993'),('United Arab Emirates','+971'),('Uzbekistan','+998'),('Vietnam','+84'),('Yemen','+967'),('Albania','+355'),('Andorra','+376'),('Austria','+43'),('Belarus','+375'),('Belgium','+32'),('Bosnia and Herzegovina','+387'),('Bulgaria','+359'),('Canary Islands','+3491'),('Croatia','+385'),('Cyprus','+357'),('Czech Republic','+420'),('Denmark','+45'),('Estonia','+372'),('Faroe Islands','+298'),('Finland/Aland Islands','+358'),('France','+33'),('Germany','+49'),('Gibraltar','+350'),('Greece','+30'),('Hungary','+36'),('Iceland','+354'),('Ireland','+353'),('Italy','+39'),('Latvia','+371'),('Liechtenstein','+423'),('Lithuania','+370'),('Luxembourg','+352'),('Macedonia','+389'),('Malta','+356'),('Moldova','+373'),('Monaco','+377'),('Montenegro','+382'),('Netherlands','+31'),('Norway','+47'),('Poland','+48'),('Portugal','+351'),('Romania','+40'),('San Marino','+378'),('Serbia','+381'),('Slovakia','+421'),('Slovenia','+386'),('Spain','+34'),('Sweden','+46'),('Switzerland','+41'),('Ukraine','+380'),('United Kingdom','+44'),('Vatican City','+379'),('Algeria','+213'),('Angola','+244'),('Benin','+229'),('Botswana','+267'),('Burkina Faso','+226'),('Burundi','+257'),('Cameroon','+237'),('Canary Islands','+3491'),('Cape Verde','+238'),('Central Africa','+236'),('Chad','+235'),('Comoros','+269'),('Congo','+242'),('Congo, Dem Rep','+243'),('Djibouti','+253'),('Egypt','+20'),('Equatorial Guinea','+240'),('Eritrea','+291'),('Ethiopia','+251'),('Gabon','+241'),('Gambia','+220'),('Ghana','+233'),('Guinea','+224'),('Guinea-Bissau','+245'),('Ivory Coast','+225'),('Kenya','+254'),('Lesotho','+266'),('Liberia','+231'),('Libya','+218'),('Madagascar','+261'),('Malawi','+265'),('Mali','+223'),('Mauritania','+222'),('Mauritius','+230'),('Morocco/Western Sahara','+212'),('Mozambique','+258'),('Namibia','+264'),('Niger','+227'),('Nigeria','+234'),('Reunion/Mayotte','+262'),('Rwanda','+250'),('Sao Tome and Principe','+239'),('Senegal','+221'),('Seychelles','+248'),('Sierra Leone','+232'),('Somalia','+252'),('South Africa','+27'),('South Sudan','+211'),('Spain','+34'),('Sudan','+249'),('Swaziland','+268'),('Tanzania','+255'),('Togo','+228'),('Tunisia','+216'),('Uganda','+256'),('Zambia','+260'),('Zimbabwe','+263'),('American Samoa','+1684'),('Australia/Cocos/Christmas Island','+61'),('Cook Islands','+682'),('Fiji','+679'),('French Polynesia','+689'),('Guam','+1671'),('Marshall Islands','+692'),('Micronesia','+691'),('New Caledonia','+687'),('New Zealand','+64'),('Northern Mariana Islands','+1670'),('Palau','+680'),('Papua New Guinea','+675'),('Samoa','+685'),('Solomon Islands','+677'),('Tonga','+676'),('Tuvalu','+688'),('Vanuatu','+678'),('American Samoa','+1684'),('Anguilla','+1264'),('Antigua and Barbuda','+1268'),('Aruba','+297'),('Ascension','+247'),('Bahamas','+1'),('Barbados','+1246'),('Belize','+501'),('Bermuda','+1441'),('Canada','+1'),('Cayman Islands','+1345'),('Costa Rica','+506'),('Cuba','+53'),('Dominica','+1767'),('Dominican Republic','+1809'),('Dominican Republic','+1809201'),('El Salvador','+503'),('Greenland','+299'),('Grenada','+1473'),('Guadeloupe','+590'),('Guam','+1671'),('Guatemala','+502'),('Haiti','+509'),('Honduras','+504'),('Jamaica','+1876'),('Martinique','+596'),('Mexico','+52'),('Montserrat','+1664'),('Netherlands Antilles','+599'),('Nicaragua','+505'),('Northern Mariana Islands','+1670'),('Panama','+507'),('Puerto Rico','+1787'),('St Kitts and Nevis','+1869'),('St Lucia','+1758'),('St Pierre and Miquelon','+508'),('St Vincent Grenadines','+1784'),('Trinidad and Tobago','+1868'),('Turks and Caicos Islands','+1649'),('United States','+1'),('Virgin Islands, British','+1284'),('Virgin Islands, U.S.','+1340'),('Argentina','+54'),('Bolivia','+591'),('Brazil','+55'),('Chile','+56'),('Colombia','+57'),('Ecuador','+593'),('Falkland Islands','+500'),('French Guiana','+594'),('Guyana','+592'),('Paraguay','+595'),('Peru','+51'),('Suriname','+597'),('Uruguay','+598'),('Venezuela','+58'),('Kosovo','+883')---