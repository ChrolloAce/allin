# Resend Email Setup Guide - Production Mode

This guide will help you set up Resend to send emails in production mode (not test/sandbox mode).

## 🚀 Quick Start

### Step 1: Create/Access Your Resend Account

1. Go to [resend.com](https://resend.com)
2. Sign up or log in to your account

### Step 2: Verify Your Domain (REQUIRED for Production)

**Why?** In test mode, Resend can only send to verified email addresses. To send to ANY email (like customer emails), you must verify your domain.

1. Go to [resend.com/domains](https://resend.com/domains)
2. Click **"Add Domain"**
3. Enter your domain (e.g., `allinplumbingsolutions.com`)
4. Resend will provide DNS records to add:
   - **SPF Record** (TXT)
   - **DKIM Record** (TXT or CNAME)
   - **DMARC Record** (TXT) - optional but recommended

### Step 3: Add DNS Records

**Where to add these:**
- If your domain is with GoDaddy, Namecheap, Google Domains, etc., log into your domain registrar
- Go to DNS Management / DNS Settings
- Add the records that Resend provides

**Example DNS Records:**
```
Type: TXT
Name: @
Value: v=spf1 include:amazonses.com ~all

Type: TXT  
Name: resend._domainkey
Value: [long DKIM key provided by Resend]

Type: TXT
Name: _dmarc
Value: v=DMARC1; p=none; rua=mailto:dmarc@allinplumbingsolutions.com
```

⏱️ **Wait 5-30 minutes** for DNS propagation

### Step 4: Verify Domain Status

1. Return to [resend.com/domains](https://resend.com/domains)
2. Check if your domain shows as "Verified" ✅
3. If not verified yet, click "Verify" to check status

### Step 5: Get Your API Key

1. Go to [resend.com/api-keys](https://resend.com/api-keys)
2. Create a new API key or use an existing one
3. **Important:** Make sure it's a **production** key, not a test key
4. Copy the API key (starts with `re_...`)

### Step 6: Update Environment Variables

1. Create a `.env.local` file in your project root:

```bash
# Resend API Configuration
RESEND_API_KEY=re_your_actual_api_key_here

# Email Configuration (use your verified domain)
EMAIL_FROM_ADDRESS=noreply@allinplumbingsolutions.com
EMAIL_FROM_NAME=All In Plumbing Solutions

# Email Recipients (comma-separated for multiple)
EMAIL_TO=allinplumbingsolutions@gmail.com
```

2. **For production deployment** (Vercel, Netlify, etc.):
   - Add these environment variables in your hosting platform's dashboard
   - Never commit `.env.local` to git

### Step 7: Test Your Setup

1. Start your development server:
```bash
npm run dev
```

2. Submit a test form on your website

3. Check the terminal/console for logs:
```
📧 Sending emails to: [ 'allinplumbingsolutions@gmail.com' ]
📬 Email send results: [...]
✅ All emails sent successfully
```

4. Check the recipient's inbox (including spam folder)

---

## 🔧 Troubleshooting

### "Email not sending" or "Test mode restrictions"

**Solution:** Verify your domain in Resend. Test mode only allows sending to verified email addresses.

### "Invalid API key"

**Solution:** 
- Check that your API key is correct in `.env.local`
- Make sure there are no extra spaces
- Verify it's a production API key

### "DNS records not verified"

**Solution:**
- Wait longer (can take up to 1 hour in some cases)
- Double-check DNS records are entered correctly
- Use [MXToolbox](https://mxtoolbox.com/) to verify DNS propagation

### "Emails going to spam"

**Solution:**
- Add DMARC record if you haven't
- Set up a DMARC policy: `v=DMARC1; p=quarantine; rua=mailto:dmarc@allinplumbingsolutions.com`
- Warm up your domain by sending gradually increasing volumes

---

## 📊 Current Configuration

**Email Recipients:** `allinplumbingsolutions@gmail.com` (Mike's email)

**Forms that send emails:**
- Homepage hero form
- Contact page form
- Service quote forms

**From Address:** 
- Development: `onboarding@resend.dev` (Resend's test address)
- Production: `noreply@allinplumbingsolutions.com` (after domain verification)

---

## 🆘 Need Help?

1. **Resend Documentation:** [resend.com/docs](https://resend.com/docs)
2. **Resend Support:** [resend.com/support](https://resend.com/support)
3. **Check API Logs:** [resend.com/emails](https://resend.com/emails) - See all sent emails and errors

---

## ✅ Checklist

- [ ] Resend account created
- [ ] Domain added to Resend
- [ ] DNS records added to domain registrar
- [ ] Domain verified in Resend (shows green checkmark)
- [ ] Production API key obtained
- [ ] `.env.local` file created with API key
- [ ] `EMAIL_FROM_ADDRESS` updated to use verified domain
- [ ] Test form submission successful
- [ ] Email received in inbox

Once all items are checked, you're in **Production Mode**! 🎉

