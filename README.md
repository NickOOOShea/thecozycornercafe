# Mountain View Diner - Restaurant Template

## 🍽️ Overview
This is a static restaurant/diner website template for HollerBuilt. It focuses on displaying menu information and encouraging phone orders rather than online ordering.

## ✅ Recent Fixes (Restaurant-Specific)

### Removed E-commerce Features:
- ❌ Removed shopping cart functionality
- ❌ Removed CartContext, CartButton, CartDrawer components
- ❌ Removed checkout and order-success pages
- ❌ Removed "Add to Cart" buttons from menu items

### Updated Navigation:
- ✅ Changed "Products" to "Menu"
- ✅ Replaced cart icon with "Call for Takeout" button
- ✅ Removed cart count badge

### Updated Layout:
- ✅ Removed CartProvider wrapper
- ✅ Updated metadata for restaurant/diner
- ✅ Removed pickup-order form

### Updated Menu Display:
- ✅ Menu items now display-only (no cart functionality)
- ✅ Added "(86'd)" indicator for unavailable items
- ✅ Added breakfast serving time indicator
- ✅ Kept dietary tags and customization options

## 📁 Project Structure
```
hollerbuilt-restaurant-template/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Homepage
│   │   ├── layout.tsx         # Root layout (no cart)
│   │   ├── menu/              # Menu display page
│   │   ├── about/             # About the diner
│   │   └── contact/           # Contact & location
│   ├── components/
│   │   ├── Navigation.tsx     # Updated nav with call button
│   │   ├── MenuItem.tsx       # Display-only menu items
│   │   ├── DailySpecials.tsx  # Today's specials
│   │   ├── HoursDisplay.tsx   # Restaurant hours
│   │   └── [other components]
│   └── content/
│       └── menu/              # Menu JSON files
├── scripts/
│   ├── update-hours.js        # Voice update script
│   ├── update-specials.js     # Voice update script
│   └── update-menu.js         # Voice update script
└── [config files]
```

## 🎯 Key Features

### For Customers:
- View full menu with prices
- See daily specials
- Check restaurant hours
- One-click call for takeout
- Get directions
- Sign up for newsletter

### For Restaurant Owner:
- Update hours via phone call
- Change daily specials via voice
- Mark menu items as unavailable
- Add announcements
- All updates in plain English

## 📱 Voice Commands (Examples)
```
"We're closed tomorrow for Thanksgiving"
"Today's special is meatloaf for $12.99"
"We're out of apple pie"
"Change Friday hours to 6 AM to 10 PM"
```

## 🚀 Deployment
```bash
npm install
npm run build
# Deploy to Netlify
```

## 🎨 Customization Needed
1. **Restaurant Details:**
   - Name, phone, address
   - Logo and hero image
   - Menu items and prices

2. **Images Needed:**
   - Hero image (diner exterior/interior)
   - Daily specials board
   - About page photos
   - OG image for social sharing

3. **Content:**
   - Restaurant story
   - Menu descriptions
   - Hours of operation

## 💡 Design Philosophy
- **No online ordering** - Encourages phone calls and in-person visits
- **Simple navigation** - Easy for older customers
- **Fast loading** - Works on slow rural internet
- **Voice updates** - No computer skills needed

## 📞 Contact Flow
1. Customer views menu online
2. Calls restaurant to place order
3. Picks up food in person
4. Pays at pickup (cash/check/card)

This maintains the personal connection that's important in rural communities while providing modern convenience of online menu viewing.
