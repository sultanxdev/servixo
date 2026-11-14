# Servixo — Product Feature Specification

## Product overview

| Attribute | Definition |
|---|---|
| Product | Servixo |
| Product type | Home Services Subscription and Booking Platform |
| Target market | India |
| Platform | Responsive web application |
| Roles | Customer, Professional, Admin |

This document organizes the uploaded `Servixo_Features.pdf`. It preserves the feature list and MVP exclusions; it is not a replacement for unresolved product decisions.

## 1. Customer panel

### 1.1 Signup and login
- Customer registration.
- Customer login.
- Authentication and logout.

### 1.2 Services and Premium plans
- View available services and service details.
- View available Premium plans.
- View plan price, validity, and included visits.

### 1.3 Subscription
- Purchase a Premium subscription.
- View active subscription and validity.
- View total included visits, used visits, and remaining visits.

### 1.4 Service booking
- Select a service.
- Select or enter a service address.
- Select an available date and time.
- Confirm booking.
- View booking status.
- View assigned professional and relevant job details.

## 2. Professional panel

### 2.1 Registration and verification
- Professional registration and personal details.
- Upload required documents.
- Submit application.
- View Admin approval status.

### 2.2 Professional profile
- View and update permitted profile information.
- Manage skills and service categories.
- Manage service PIN codes.

### 2.3 Assigned jobs
- View jobs assigned by Admin.
- View booking details, customer name, service address, service date/time, and job status.

### 2.4 Job status management
The Professional can update job status through:
1. Assigned
2. In Progress
3. Completed

There is no job acceptance/rejection workflow. There is no completion OTP or customer completion verification in the initial version.

## 3. Admin panel

### 3.1 Dashboard
- Total customers.
- Total professionals.
- Active subscriptions.
- Total, pending, and completed bookings.
- Revenue overview.

### 3.2 Customer management
- View and search customers.
- View customer details, subscriptions, and bookings.

### 3.3 Professional management
- View professionals and review registration applications.
- Review uploaded documents.
- Approve or reject professionals.
- Edit professional details.
- Manage professional skills and service PIN codes.
- View assigned jobs and professional job status.

### 3.4 Services management
- Add, edit, delete, or deactivate services.
- Manage service categories and descriptions.

### 3.5 Premium plan management
- Create and edit Premium plans.
- Set plan price, subscription validity, and included visits.
- Configure eligible services.
- Activate or deactivate plans.

### 3.6 Subscription and payment management
- View subscriptions and subscription details.
- View payment records and verify online payment results.
- View subscription status.
- Record cash payments with amount, collection date, collecting staff member, and receipt/reference number.
- Activate cash-paid subscriptions through an authorised Admin action.

### 3.7 Booking management
- View all bookings and booking details.
- View customer information, requested service, service address, and PIN code.
- Manually assign or reassign a Professional.
- View current job status, completed bookings, and cancelled bookings.

### 3.8 Serviceable PIN code management
- Add PIN codes.
- Activate or deactivate PIN codes.
- Manage available services by PIN code.
- View professionals available in each service area.

## 4. Backend and system features

### 4.1 Authentication and permissions
- User authentication.
- Three roles: Customer, Professional, Admin.
- Role-based access permissions.
- Protected APIs and data access.

### 4.2 Payment verification
- Create online payment orders.
- Connect a payment gateway.
- Verify payment through server-side provider confirmation/webhooks.
- Record online payment transactions.
- Record cash payment transactions.
- Prevent duplicate payment processing.

### 4.3 Subscription management
- Activate a subscription after verified online payment or authorised cash activation.
- Set subscription start and expiry dates.
- Allocate included visit credits.
- Track used and remaining visits.
- Check subscription eligibility before booking.

### 4.4 Booking and availability
- Validate selected service.
- Validate serviceable PIN code.
- Validate active subscription.
- Validate remaining visits.
- Validate available booking slots.
- Create booking and maintain booking status.

### 4.5 Admin-controlled Professional assignment
- Display eligible, approved Professionals to Admin.
- Match by service skills and PIN code coverage.
- Allow Admin to select and assign a Professional.
- Allow Admin to reassign a Professional.
- Store assignment history.

There is no automatic Professional assignment.

### 4.6 Job status management
- Store Assigned, In Progress, and Completed status.
- Record who updated the status and status timestamps.
- Prevent unauthorised status changes.

### 4.7 Visit deduction
- Deduct one visit when the job is marked Completed.
- Ensure a visit is deducted only once.
- Update remaining visit balance.
- Maintain a record of visit deductions.

### 4.8 Professional earnings and payout records
- Calculate Professional earnings for completed jobs.
- Store earnings records and payable amounts.
- Maintain payout records.
- Allow Admin to update payout status.
- Payouts can be processed manually in the initial version.

## 5. Public website

### 5.1 Navigation
- Servixo logo.
- Home, Services, Premium Plans, How It Works.
- Login.
- Become a Professional.

### 5.2 Homepage sections
- Hero.
- How It Works.
- Services.
- Premium Plans.
- FAQ.
- CTA.
- Footer.

### 5.3 Other features
- PIN code availability checker.
- Customer signup/login.
- Professional registration.
- Responsive mobile-friendly layout.
- Contact and basic company information.

## 6. Core business workflow

1. Customer signs up or logs in.
2. Customer checks PIN code availability.
3. Customer views and purchases a Premium plan.
4. Payment is verified and subscription is activated.
5. Customer books an eligible service.
6. Admin reviews the booking.
7. Admin manually assigns an approved Professional.
8. Professional views the assigned job.
9. Professional starts the service.
10. Professional marks the service Completed.
11. System deducts one visit exactly once.
12. System calculates Professional earnings.
13. Admin manages the payout record.

## 7. Features not included in this MVP

- Automatic Professional assignment.
- Professional job acceptance/rejection.
- Completion OTP.
- Customer completion confirmation.
- Photo-based completion verification.
- Customer/Professional dispute workflow.
- Live GPS tracking.
- Automatic recurring subscription renewal.
- Customer wallet.
- Coupons and loyalty programmes.
- Advanced analytics.
- AI chatbot or voice booking.
- Native Android/iOS applications.

These may be considered after the first operational release.
