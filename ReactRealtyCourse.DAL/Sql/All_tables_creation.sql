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

INSERT INTO [Apartment]([CreationDateTime], [HouseId], [Floor], [Price], [RoomAmount], [LivingSpace]) VALUES('20210622', 1, 15, 4860000.0, 1, 43.6);
INSERT INTO [Apartment]([CreationDateTime], [HouseId], [Floor], [Price], [RoomAmount], [LivingSpace]) VALUES('20210623', 1, 3, 6400000.0, 2, 58.2);
INSERT INTO [Apartment]([CreationDateTime], [HouseId], [Floor], [Price], [RoomAmount], [LivingSpace]) VALUES('20210522', 2, 7, 2920000.0, 1, 33.2);
INSERT INTO [Apartment]([CreationDateTime], [HouseId], [Floor], [Price], [RoomAmount], [LivingSpace]) VALUES('20210408', 3, 1, 2450000.0, 1, 29.6);
INSERT INTO [Apartment]([CreationDateTime], [HouseId], [Floor], [Price], [RoomAmount], [LivingSpace]) VALUES('20210412', 3, 2, 3180000.0, 2, 42.5);
INSERT INTO [Apartment]([CreationDateTime], [HouseId], [Floor], [Price], [RoomAmount], [LivingSpace]) VALUES('20210412', 3, 2, 4370000.0, 3, 56.7);