# Getting Started

Welcome to your new CAP project.

It contains these folders and files, following our recommended project layout:

File or Folder | Purpose
---------|----------
`app/` | content for UI frontends goes here
`db/` | your domain models and data go here
`srv/` | your service models and code go here
`readme.md` | this getting started guide

## Next Steps

- Open a new terminal and run `cds watch`
- (in VS Code simply choose _**Terminal** > Run Task > cds watch_)
- Start with your domain model, in a CDS file in `db/`

## Learn More

Learn more at <https://cap.cloud.sap>.



Steps Implemented 

## PART 1
Create Project From Template
CAP project
Name - CAP_01
Selected -  SAP HANA CLoud, Cloud Foundry Finish
db-> schema.cds (namespace my.bookshop) added entity Books
terminal -- cds add data(will create a folder data in db with csv file name - my.bookshop-Books.csv)
now added the dummy data in csv file.
Now need to expose our entity 
created cat-service.cds in srv folder and exposed the entity Books
now created a test.http file in root path to test
For starting the service we do cds watch 
created two req (to test)
GET http://localhost:4004/odata/v4/catalog/Books 
GET http://localhost:4004/odata/v4/catalog/Books(123e4567-e89b-12d3-a456-426614174000)

## PART2(CRUD Operation with REST API)
added a post req in test.http
###
POST http://localhost:4004/odata/v4/catalog/Books
Content-Type: application/json

{
    "title":"Oliver",
    "author":"Jinoy",
    "price":100.12,
    "stock":11
}

to update PUT method

## PART3(Integrating Persistent SQLITE Database ,Enabling schema Evolution)
terminal -- cds deploy 
need to modify project configuration
package.json-->
 "cds":{
    "requires":{
      "db":{
        "kind":"sqlite",
        "credentials":{
          "url":"db/my-bookshop.sqlite"
        }

      }
      }
this makes persistent sql database
now setting schema evolution to auto 
 "schema_evolution":"auto"

## PART4(Connect CAPM and Fiori using MTA) Build fiori app with SAP CAPM

mta.yaml --In a multi target application project the mta.yaml file defines different modules and how they interact with each other.

Right click mta.yaml file --create MTA module from template-- Sap Fiori application(UI5)--List report page
Data Source -- Use a local CAP project 
Main Entity --Books
Module name -- bookshop
Application Title -- Library
Finish --created
bookshop folder gets created inside app folder

Now for creating SAPUI5 (MVC ) we choose the basic template
SAP Fiori Application-->Basic --> Use a local CAP Project
module name -- custom_view_bookshop
application title --> created with custom template
Finish

## Part5 (Data insertion Sap Fiori App)
created a form with submit button
then created a handler in controller , 











