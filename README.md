# Big Bosket - Fresh Grocery E-commerce

A modern, responsive e-commerce website for fresh groceries, fruits, vegetables, and daily essentials. Built with vanilla HTML, CSS, and JavaScript for optimal performance and simplicity.

🌐 **Live Demo**: [https://mybigbosket.netlify.app/](https://mybigbosket.netlify.app/)

## Features

### 🛍️ Shopping Experience
- Product catalog with detailed product pages
- Advanced filtering and sorting options
- Search functionality across all products
- Shopping cart with quantity management
- Wishlist to save favorite items
- Order success confirmation

### 📱 Responsive Design
- Fully responsive layout for desktop, tablet, and mobile
- Fixed navigation header that stays accessible while scrolling
- Mobile-optimized interface with touch-friendly controls

### 🎯 Product Management
- Dynamic product display with ratings and pricing
- Category-based filtering
- Price range sorting (low to high, high to low)
- Rating-based filtering
- Product detail pages with tabs (description, nutrition, reviews)

### 🧭 Navigation & Pages
- **Home**: Hero section with featured products and company highlights
- **Shop**: Complete product catalog with filtering options
- **Our Story**: About page with company information
- **Recipes**: Curated recipes using fresh ingredients
- **Contact**: Contact form with company information
- **Cart**: Shopping cart management
- **Wishlist**: Saved items for later purchase

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Storage**: Local Storage for cart and wishlist persistence
- **Design**: Custom CSS with flexbox/grid layouts
- **Icons**: Unicode symbols and custom styling
- **Responsive**: CSS Media Queries

## File Structure

```
├── index.html              # Homepage
├── products.html           # Product catalog
├── product-detail.html     # Individual product pages
├── about.html              # Company story
├── recipes.html            # Recipe collection
├── contact.html            # Contact form
├── Cart.html               # Shopping cart
├── wishlist.html           # Wishlist page
├── order-success.html      # Order confirmation
├── header.html             # Reusable header component
├── footer.html             # Reusable footer component
├── css/
│   └── style.css           # Main stylesheet
├── js/
│   ├── layout.js           # Header/footer loading
│   ├── products.js         # Product data and display
│   ├── cart.js             # Cart functionality
│   ├── cart-utils.js       # Cart utility functions
│   ├── wishlist-utils.js   # Wishlist utility functions
│   ├── product-detail.js   # Product detail page logic
│   └── search.js           # Search functionality
└── public/                 # Product images and assets
```

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional but recommended)

### Installation

1. **Clone or download** the repository
```bash
git clone <repository-url>
cd big-bosket
```

2. **Serve the files** using a local web server:

**Option A: Using Python**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Option B: Using Node.js**
```bash
npx serve .
```

**Option C: Using Live Server (VS Code extension)**
- Install Live Server extension
- Right-click on `index.html` → "Open with Live Server"

3. **Open in browser**
   - Navigate to `http://localhost:8000` (or the port shown by your server)

### Direct File Access
You can also open `index.html` directly in your browser, though some features may be limited due to CORS restrictions.

## Key Features Explained

### Dynamic Header Loading
The header is loaded dynamically on each page using JavaScript, ensuring consistent navigation across all pages while maintaining the sticky positioning.

### Local Storage Persistence
- Cart items persist between sessions
- Wishlist items are saved locally
- Product quantities and selections are maintained

### Responsive Breakpoints
- Desktop: 1024px and above
- Tablet: 768px to 1023px
- Mobile: Below 768px

### Product Data Structure
Products include:
- ID, name, description
- Price and rating
- Category classification
- Image assets
- Nutritional information
- Customer reviews

## Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- Vanilla JavaScript (no framework overhead)
- Optimized images
- CSS-only animations
- Efficient DOM manipulation
- Local storage for data persistence

## Customization

### Adding New Products
Edit `js/products.js` and add new product objects following the existing structure:

```javascript
{
    id: 'new-product',
    name: 'Product Name',
    price: 2.99,
    image: 'public/product-image.jpg',
    category: 'fruits',
    rating: 4.5,
    description: 'Product description...',
    // ... other properties
}
```

### Styling Modifications
Main styles are in `css/style.css`. Key sections:
- Header styles (navigation, search)
- Product cards and layouts
- Responsive media queries
- Form styling

### Color Scheme
- Primary Green: `#0c3321`
- Secondary Green: `#1f4d3c`
- Background: `#f8f1ed`
- Accent: `#2e7d32`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across different devices/browsers
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or issues, please contact support@bigbosket.com or use the contact form on the website.
