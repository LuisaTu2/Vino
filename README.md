

This project was initally designed to navigate through and visualize the contents of the LCBO API repository. LCBO stands for "Liquor Control Board of Ontario", a corporation that retails and distributes alcoholic beverages throughout the Canadian province of Ontario. Since the LCBO API has recently been converted to an open source project, I have kept the website's framework and downloaded only a sample of data per category and type of product.
You can read more about it here --> https://lcboapi.com/news/lcbo-api-is-now-open-source-software/. 

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>

## Get started
1. Clone the project
2. Navigate to vino>>src>>components>>stores
3. Edit the file "Stores.js" by adding your personal Google Map API key in the Google Api Wrapper at the end of the file. For more info got to: https://developers.google.com/maps/documentation/javascript/get-api-key. This screenshots highlights the content that you need to substitude with your own key. 

![Vino Website - Google Key Modifications](screenshots/gKey.PNG)

4. From the project root folder run the command: <br> npm install
5. A sample of the navigation pages is displayed below.

<br>
Welcome page

![Vino Website - Welcome](screenshots/HomePage.PNG)

<br>
About

![Vino Website - About](/screenshots/About.png)

<br>
Products

![Vino Website - Products](/screenshots/Products.PNG)

<br>
Filter products by category and type

![Vino Website - ProductFilter](/screenshots/SelectProduct.png)

<br>
See specifications and serving suggestions by hovering on top of product

![Vino Website - ProductHighlight](/screenshots/ProductHighlight.png)

<br>
Map visualization of Windsor's LCBO stores. 

![Vino Website - Stores](/screenshots/Stores.png)

<br>
Contact page

![Vino Website - Contact](/screenshots/Contact.png)


