USE foodchain_db;

INSERT INTO 
vendors (user_name, user_password, company_name, email, phone_number, website, location)
values('jeremy', 1234, 'Good Bananas', 'jeremy@goodbananas.com', 1231231234, 'goodbananas.com', 'El Paso, TX, USA'),
('user', 1234, 'Dim Orchard', 'jeremy@dimorchard.com', 1231231234, 'dimorchard.com', 'El Paso, TX, USA'),
('test', 1234, 'Fresh Fish', 'jeremy@freshfish.com', 1231231234, 'freshfish.com', 'New York, NY, USA'),
('username', 1234, 'Herbs!', 'jeremy@excitedaboutherbs.com', 1231231234, 'excitedaboutherbs.com', 'Portland, OR, USA'),
('1234', 1234, 'Just Potatos', 'jeremy@itsjustpotatos.com', 1231231234, 'itsjustpotatos.com', 'Baltimore, MD, USA'),
('hancockj', 1234, 'Blueberries R Us', 'jeremy@blueberriesareus.com', 1231231234, 'blueberriesareus.com', 'Miami, FL, USA'),
('jeremy1', 1234, 'Beef Farm', 'jeremy@beeffarm.com', 1231231234, 'beeffarm.com', 'Sacramento, CA, USA');

INSERT INTO
consumers (user_name, user_password, person_name, email, phone_number)
values('jeremy', 1234, 'Jeremy', 'me@me.com', 1231231234),
('jeremy1', 1234, 'Jeremy1', 'me@me.com', 1231231234),
('jeremy2', 1234, 'Jeremy2', 'me@me.com', 1231231234),
('jeremy3', 1234, 'Jeremy3', 'me@me.com', 1231231234),
('jeremy4', 1234, 'Jeremy4', 'me@me.com', 1231231234);

INSERT INTO 
products (product_name, vendor_id, harvest_date, chemicals_used, certified_organic, vendor_notes)
values('Strawberries', 1, 1/16/2019, 'manure', 1, 'Best. Strawberries. Ever'),
('Chicken', 1, 1/16/2019, 'manure', 1, 'Worst lot I have had'),
('Cucumber', 2, 1/12/2019, 'manure', 0, 'How does this app work?'),
('Potato', 2, 1/10/2019, 'manure', 0, 'I really love farming'),
('Butternut squash', 3, 1/05/2019, 'manure', 0, ' '),
('Watermelon', 3, 1/01/2019, 'manure', 1, 'Best. Melons. Ever'),
('Your mom!', 4, 12/16/2018, 'manure', 1, 'This is a fake product'),
('Ground beef', 4, 12/06/2018, 'manure', 1, 'Headed to market tomorrow');

INSERT INTO
codes (code_value)
values(1),(2),(3),(4),(5),(6),(7),(8),(9),(10)

INSERT INTO
links (product_id, vendor_id, code_value, location)
values(1, 1, 1, 'El Paso, TX, USA'),
(1, 2, 2, 'El Paso, TX, USA'),
(1, 3, 3, 'New York, NY, USA'),
(2, 1, 4, 'El Paso, TX, USA'),
(2, 2, 5, 'El Paso, TX, USA'),
(3, 3, 6, 'New York, NY, USA'),
(4, 4, 7, 'Portland, OR, USA'),
(4, 5, 8, 'Baltimore, MD, USA'),
(4, 6, 9, 'Miami, FL, USA')

