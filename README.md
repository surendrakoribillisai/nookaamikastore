# Nookambika Store — Full Website

Normal website, not Blogger.

## Services
- Firebase project: `nookambika-store`
- Supabase project: `ftuouasbpexfmcndusvt`
- Products/categories/orders/settlements/wishlist: Supabase
- Customer authentication/session: Firebase-backed secure backend
- Admin: Supabase Edge Functions

## Retention
- Customer order history visible: 3 months
- Admin orders/order items/settlements: 1 year
- Database order/order item/settlement retention: 1 year
- Wishlist: private to customer, 1 year
- Expired records: automatically cleaned after scheduling the Supabase cleanup function

## Important
The browser must never contain a Supabase service-role key or Firebase Admin private key.
Set the Supabase publishable key in the website files.
The mobile+password Firebase backend must be configured server-side; do not turn mobile numbers into fake email addresses.
