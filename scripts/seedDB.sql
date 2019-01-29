USE ff0nx9pedx1sxoln;

INSERT INTO

Vendors (user_name, user_password, company_name, email, phone_number, website, location)
values("grower1", "1234", "Deer Run Farms", "me@deerrun.com", "1231231234", "https://deerrunfarmofamelia.com/", "9903 Bevils Bridge Rd, Amelia, VA 23002"),
("grower2", "1234", "Carter Mountain Orchard", "me@cartermountain.com", "1231231234", "https://chilesfamilyorchards.com/orchards/carter-mountain-orchard/", "1435 Carters Mountain Trail, Charlottesville, VA 22901"),
("grower3", "1234", "Holly Fork Farm", "me@hollyforkfarm.com", "1231231234", "http://www.hollyforkfarm.com/", "4901 Holly Fork Road, Barhamsville, Virginia 23011"),
("grower4", "1234", "Old Crowe Farm", "me@oldcrowefarm.com", "1231231234", "https://oldcrowefarm.com/", "815 Little Retreat Road, Red Oak, Virginia 23964"),
("dist1", "1234", "Produce Source Partners", "me@producesource.com", "1231231234", "https://producesourcepartners.com/", "13167 Telcourt Road, Ashland, VA 23005"),
("dist2", "1234", "Tom's Meats & Produce", "me@tomsmeats.com", "1231231234", "http://www.tomsmeatsandproduce.com/", "2410 Magnolia Court, Richmond, VA 23223" ),
("retail1", "1234", "Ellwood Thompson's", "me@ellwoodthompsons.com", "1231231234", "https://ellwoodthompsons.com/", "4 N. Thompson St, Richmond VA 23221"),
("retail2", "1234", "Libbie Market", "me@libbiemarket.com", "1231231234", "http://www.libbiemarket.com/", "400 Libbie Avenue, Richmond, VA 23226");

INSERT INTO
Consumers (user_name, user_password, person_name, email, phone_number)
values("jeremy", "1234", "Jeremy", "me@me.com", "1231231234"),
("david", "1234", "David", "me@me.com", "1231231234"),
("test", "1234", "Test", "me@me.com", "1231231234"),
("user", "1234", "User", "me@me.com", "1231231234");

INSERT INTO 
Products (product_name, vendor_id, harvest_date, chemicals_used, certified_organic, vendor_notes)
values("honey crisp apple", 2, "1/23/2019", "none", 1, "Best. Apples. Ever. Seriously, the rain this year gave us some of the biggest apples I have ever seen."),
("chicken", 1, "1/18/2019", "none", 1, "Always free-range and always the absolute best quality. Thank you for your support!"),
("cucumber", 3, "1/18/2019", "none", 0, "Thanks for buying from a local farm!"),
("potato", 3, "1/2/2019", "none", 0, "This potato had a better life than many folks. Please remember to serve your local community. You can be the change you want to see."),
("butternut squash", 4, "1/12/2019", "none", 0, "There are a ton of amazing recipes for butternut squash. If you have only used it one way I would say check Google for recipes. So yummy!"),
("watermelon", 3, "1/18/2019", "none", 1, "Best. Melons. Ever"),
("kale", 4, "1/14/2019", "none", 1, "This kale was raised on our family farm. We hope you love it as much as we did!"),
("ground beef", 1, "1/18/2019", "none", 1, "All of our beef comes from grass-fed cows freely roaming 30 acres of beautiful grazing land that has been in our family for three generations.");

INSERT INTO
Links (product_id, vendor_id, link_date, location)
values(1, 2, "1/23/2019", "Charlottesville, VA, USA"), (1, 5, "1/26/2019", "Ashland, VA, USA"), (1, 7, "1/28/2019", "Richmond, VA, USA"),
(2, 1, "1/18/2019", "Amelia, VA, USA"), (2, 8, "1/26/2019", "Richmond, VA, USA"),
(3, 3, "1/18/2019", "Barhamsville, VA, USA"), (3, 6, "1/22/2019", "Richmond, VA, USA"), (3, 8, "1/26/2019", "Richmond, VA, USA"),
(4, 3, "1/2/2019", "Barhamsville, VA, USA"), (4, 6, "1/22/2019", "Richmond, VA, USA"), (4, 8, "1/26/2019", "Richmond, VA, USA"),
(5, 4, "1/12/2019", "Bacon, VA, USA"), (5, 5, "1/16/2019", "Ashland, VA, USA"), (5, 8, "1/20/2019", "Richmond, VA, USA"),
(6, 3, "1/18/2019", "Barhamsville, VA, USA"), (6, 6, "1/22/2019", "Richmond, VA, USA"), (6, 8, "1/26/2019", "Richmond, VA, USA"),
(7, 4, "1/14/2019", "Bacon, VA, USA"), (7, 5, "1/16/2019", "Ashland, VA, USA"), (7, 8, "1/20/2019", "Richmond, VA, USA"),
(8, 1, "1/18/2019", "Amelia, VA, USA"), (8, 8, "1/26/2019", "Richmond, VA, USA");
