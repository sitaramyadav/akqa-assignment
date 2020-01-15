# akqa-assignment

### AKQA Web Developer Exercise Requirements
 

**Instructions**

• Please build the page so it matches the Photoshop PSD file using the guidelines below.
• We want to see how you build the page, so please do not use any page template libraries.
• You are allowed to use Modernizr and/or Selectivizr, along with a single JavaScript library such as jQuery or Mootools if you wish, but you must not use any other plugins or libraries.
• When submitting your completed exercise, please specify any tools you have used, including the editor you used to write your code.
General Requirement and considerations
• Ensure you must use Browser compliance, Semantic, Accessible and SEO friendly code.
• Ensure you must use OOJS (you can use JQuery).
• Ensure your assignment must be fully functional in all the modern browsers including IE.
• Ensure your assignment must be fully responsive (as per design provided).
Good to have
• Use of ES6 is preferable
• Use of pre-processors to generate CSS from LESS/SASS is preferable.
• Use Frontend automation (grunt/gulp/webpack) is preferable.
• We want to see the use of hover state and animations for different elements.
• Please extract the images from design files provided (assignment.jpg and assignment_cart.jpg)
also you can use your own sample images too.
 

The ‘Catalogue’ Page
The page shown in the creative depicts a catalogue page on a fictitious online shopping site.

• Screen 1 - shows the list of different products along with the header footer and a cart in collapse state.
• Screen -2 shows list of different products along with header and footer and a cart in expanded state
• On screen -2, cart contains the product image, title, price, quantity and cost desired for purchase
• Beneath the product list in the cart, a sub-total of the product costs are shown, VAT is then added (at 20%) and the total is shown beneath. Finally, a ‘Buy Now’ button allows the user to go ahead and purchase the items shown at the total price given.
Functional Specification
The Catalogue page is divided into 3 sections
• Header
• Product listing
• Cart
Header
• Header contains the static logo image (provided) and a cart icon with the counter.
• Counter is purely dynamic based on the item in the cart.
• Behaviour of cart is like CTA to show the bottom aligned basket overlay.
Product Listing
• All the product cards, product list generated through JSON (provided) including title, image, price and short description etc.
• ‘Add to cart’ CTA is also generated via JSON. Using this CTA user can add product into the cart.
Cart
• Cart will always remain stick to the bottom (above the footer) in both expanded / collapse state.
• Cart can be expandable by clicking the cart header available above the page footer or by clicking the cart icon available in the header.
• By changing the quantity of the product using the quantity field available in the cart price, the cost beside should update to reflect the price of that product multiplied by its quantity. The sub-total beneath the product list should update to reflect the sum of all the costs. The VAT cost should also update whenever the sub-total changes, as should the final total cost, which is the sum of the sub-total and the VAT.
• When selected, the delete button, indicated as a trashcan icon, should remove the item beside it entirely from the basket even if it would result in no products remaining in the basket. The totals beneath the product list should be updated accordingly whenever a product is deleted. If no products remain in the basket, the ‘Buy Now’ button should be disabled.
• When there and products in the basket and the ‘Buy Now’ button is selected, you should take the product data together with the quantities, costs and totals, and simulate how you would POST this data in JSON format to an Ajax-supported web service URL. As this is purely for simulation purposes in this exercise, you may use a blank URL for this. Display an alert message on screen once the Ajax call is complete

Note - If you find yourself running short on time, please ignore the responsive behaviour of cart (that means ok to have cart functionality in desktop view only)
 