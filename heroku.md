For deployment on Heroku make these changes:
client/src/components/CreateProduct.js
----> comment out line 94
----> 'uncomment' line 96
scripts/schema.sql
----> change every instance of 'foodchain_db' to 'ff0nx9pedx1sxoln'
scripts/seedDB.sql
----> change every instance of 'foodchain_db' to 'ff0nx9pedx1sxoln'

For development on local make these changes:
client/src/components/CreateProduct.js
----> comment out line 96
----> 'uncomment' line 94
scripts/schema.sql
----> change every instance of 'ff0nx9pedx1sxoln' to 'foodchain_db'  
scripts/seedDB.sql
----> change every instance of 'ff0nx9pedx1sxoln' to 'foodchain_db'  