CREATE TABLE [House] (
    [Id] int IDENTITY(1,1),
    [CreationDateTime] datetime,
    [Address] nvarchar(max),
    [BuildYear] int,
    [WallMaterial] nvarchar(256),
    [MaxFloor] int,
	PRIMARY KEY ([Id])
);

CREATE TABLE [Apartment] (
    [Id] int IDENTITY(1,1),
    [CreationDateTime] datetime,
    [HouseId] int,
    [Floor] int,
    [Price] float,
    [RoomAmount] int,
    [LivingSpace] float,
	PRIMARY KEY ([Id])
);

ALTER TABLE [Apartment] ADD CONSTRAINT
    FK_Apartment_House_HouseId FOREIGN KEY ([HouseId]) REFERENCES [House]([Id]);

CREATE INDEX Apartment_HouseId ON [Apartment] ([HouseId]);

-- Test data
INSERT INTO [House]([CreationDateTime], [Address], [BuildYear], [WallMaterial], [MaxFloor]) VALUES('20210620', 'Ekaterinburg, 5, Kalinina st.', 2014, 'brick', 16);
INSERT INTO [House]([CreationDateTime], [Address], [BuildYear], [WallMaterial], [MaxFloor]) VALUES('20210519', 'Ekaterinburg, 43, Victory st.', 1987, 'concrete panel', 9);
INSERT INTO [House]([CreationDateTime], [Address], [BuildYear], [WallMaterial], [MaxFloor]) VALUES('20210406', 'Ekaterinburg, 119, 1905 square st.', 1965, 'brick', 5);
INSERT INTO [House]([CreationDateTime], [Address], [BuildYear], [WallMaterial], [MaxFloor]) VALUES('20210701', 'Ekaterinburg, 17, Malisheva st.', 1958, 'brick', 4);
INSERT INTO [House]([CreationDateTime], [Address], [BuildYear], [WallMaterial], [MaxFloor]) VALUES('20210702', 'Ekaterinburg, 26, Victory st.', 1989, 'concrete panel', 9);
INSERT INTO [House]([CreationDateTime], [Address], [BuildYear], [WallMaterial], [MaxFloor]) VALUES('20210706', 'Ekaterinburg, 74, Kosmonavtov st.', 1952, 'wood', 2);
INSERT INTO [House]([CreationDateTime], [Address], [BuildYear], [WallMaterial], [MaxFloor]) VALUES('20210702', 'Ekaterinburg, 11, Kalinina st.', 2002, 'concrete panel', 12);
INSERT INTO [House]([CreationDateTime], [Address], [BuildYear], [WallMaterial], [MaxFloor]) VALUES('20210703', 'Ekaterinburg, 69, Novaya st.', 1978, 'concrete panel', 9);
INSERT INTO [House]([CreationDateTime], [Address], [BuildYear], [WallMaterial], [MaxFloor]) VALUES('20210701', 'Ekaterinburg, 18, Wide-river st.', 2007, 'brick', 6);
INSERT INTO [House]([CreationDateTime], [Address], [BuildYear], [WallMaterial], [MaxFloor]) VALUES('20210708', 'Ekaterinburg, 33, Ural workers st.', 1949, 'wood', 3);
INSERT INTO [House]([CreationDateTime], [Address], [BuildYear], [WallMaterial], [MaxFloor]) VALUES('20210708', 'Ekaterinburg, 46, Ural workers st.', 1970, 'brick', 9);
INSERT INTO [House]([CreationDateTime], [Address], [BuildYear], [WallMaterial], [MaxFloor]) VALUES('20210704', 'Ekaterinburg, 41, Kosmonavtov st.', 2019, 'mix concrete', 25);

INSERT INTO [Apartment]([CreationDateTime], [HouseId], [Floor], [Price], [RoomAmount], [LivingSpace]) VALUES('20210622', 1, 15, 4860000.0, 1, 43.6);
INSERT INTO [Apartment]([CreationDateTime], [HouseId], [Floor], [Price], [RoomAmount], [LivingSpace]) VALUES('20210623', 1, 3, 6400000.0, 2, 58.2);
INSERT INTO [Apartment]([CreationDateTime], [HouseId], [Floor], [Price], [RoomAmount], [LivingSpace]) VALUES('20210522', 2, 7, 2920000.0, 1, 33.2);
INSERT INTO [Apartment]([CreationDateTime], [HouseId], [Floor], [Price], [RoomAmount], [LivingSpace]) VALUES('20210408', 3, 1, 2450000.0, 1, 29.6);
INSERT INTO [Apartment]([CreationDateTime], [HouseId], [Floor], [Price], [RoomAmount], [LivingSpace]) VALUES('20210412', 3, 2, 3180000.0, 2, 42.5);
INSERT INTO [Apartment]([CreationDateTime], [HouseId], [Floor], [Price], [RoomAmount], [LivingSpace]) VALUES('20210712', 3, 2, 4370000.0, 3, 56.7);
INSERT INTO [Apartment]([CreationDateTime], [HouseId], [Floor], [Price], [RoomAmount], [LivingSpace]) VALUES('20210701', 2002, 4, 3400000.0, 1, 30.1);
INSERT INTO [Apartment]([CreationDateTime], [HouseId], [Floor], [Price], [RoomAmount], [LivingSpace]) VALUES('20210705', 2003, 8, 6800000.0, 2, 50.7);
INSERT INTO [Apartment]([CreationDateTime], [HouseId], [Floor], [Price], [RoomAmount], [LivingSpace]) VALUES('20210706', 2004, 2, 4200000.0, 2, 40.2);
INSERT INTO [Apartment]([CreationDateTime], [HouseId], [Floor], [Price], [RoomAmount], [LivingSpace]) VALUES('20210703', 2004, 1, 2900000.0, 1, 28.6);
INSERT INTO [Apartment]([CreationDateTime], [HouseId], [Floor], [Price], [RoomAmount], [LivingSpace]) VALUES('20210704', 2005, 6, 8500000.0, 3, 71.8);
INSERT INTO [Apartment]([CreationDateTime], [HouseId], [Floor], [Price], [RoomAmount], [LivingSpace]) VALUES('20210706', 2006, 9, 9000000.0, 4, 89.5);
INSERT INTO [Apartment]([CreationDateTime], [HouseId], [Floor], [Price], [RoomAmount], [LivingSpace]) VALUES('20210702', 2006, 8, 3900000.0, 1, 33.4);
INSERT INTO [Apartment]([CreationDateTime], [HouseId], [Floor], [Price], [RoomAmount], [LivingSpace]) VALUES('20210707', 2007, 1, 4800000.0, 1, 32.3);
INSERT INTO [Apartment]([CreationDateTime], [HouseId], [Floor], [Price], [RoomAmount], [LivingSpace]) VALUES('20210708', 2008, 2, 5100000.0, 3, 67.2);
INSERT INTO [Apartment]([CreationDateTime], [HouseId], [Floor], [Price], [RoomAmount], [LivingSpace]) VALUES('20210704', 2009, 3, 6300000.0, 3, 69.0);
INSERT INTO [Apartment]([CreationDateTime], [HouseId], [Floor], [Price], [RoomAmount], [LivingSpace]) VALUES('20210703', 2009, 5, 3700000.0, 1, 28.6);
INSERT INTO [Apartment]([CreationDateTime], [HouseId], [Floor], [Price], [RoomAmount], [LivingSpace]) VALUES('20210704', 2010, 19, 7200000.0, 3, 61.9);