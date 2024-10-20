import React from 'react'
import cssHero from "./Hero.module.css"

const HeroSection = () => {
  return (
    <div className= {cssHero.Hero}>
        <h3 className= {cssHero.Heading} >Welcome To Ahsan's Website....</h3>
        <p className= {cssHero.Paragraph} >Hello, I'm Ahsan Mujaddadi – A Creative WordPress Developer with Over 5 Years of Experience in Crafting Exceptional Websites.

As a web developer with a passion for design and functionality, I specialize in creating dynamic, responsive, and user-friendly WordPress websites. With a deep understanding of web development, I provide customized solutions that cater to both aesthetics and performance. Whether it’s developing a custom theme, building a unique plugin, or optimizing an existing site for speed and SEO, I have the skills and expertise to bring your vision to life.

I’ve worked with clients from a variety of industries, turning their ideas into functional, high-performing websites that help drive engagement and growth. I take pride in writing clean, maintainable code and ensuring every site I develop is secure, scalable, and future-proof.

With a strong focus on collaboration, I make sure to understand your goals and work closely with you every step of the way, from concept to launch. My aim is to create websites that not only look great but also deliver exceptional user experiences that convert visitors into loyal customers.

Let’s collaborate and bring your digital presence to the next level!</p>
<h3 className= {cssHero.Heading}>Services I Offer</h3>
<p className= {cssHero.Paragraph}>Headline:
"What I Offer"
Service 1: Custom WordPress Development
"I build custom WordPress websites from the ground up, tailored to your business needs."
Service 2: E-Commerce Solutions
"I specialize in WooCommerce and can help you set up a scalable, easy-to-manage online store."
Service 3: Website Optimization
"Slow website? I offer performance optimization to improve speed, SEO, and overall user experience."
Service 4: Website Maintenance
"From regular updates to security checks, I offer comprehensive WordPress maintenance services."
Call to Action:
"Have a specific project in mind? Let’s talk about your needs."
6. Testimonials
Headline:
"What My Clients Say"
Testimonial 1:
Client Name: John Doe, CEO of XYZ Brand
Feedback: "Ahsan delivered a fantastic WordPress website for our brand. He was professional, communicative, and met all our deadlines."
Testimonial 2:
Client Name: Jane Smith, Founder of ABC Blog
Feedback: "Working with Ahsan was a great experience. He took our vision and turned it into a beautiful, responsive blog that our readers love."
Call to Action:
"Want to be my next happy client? Let’s get started."
7. Blog (Optional)
Headline:
"Latest Blog Posts"

Blog Post 1: "How to Optimize WordPress for Speed and Performance"

Blog Post 2: "Top 5 WordPress Plugins Every Website Should Have"

Blog Post 3: "A Complete Guide to Setting Up WooCommerce"

Include a call to action at the bottom, encouraging visitors to subscribe or contact you.

8. Contact
Headline:
"Get in Touch"
Contact Form:
Name
Email
Subject
Message
Submit Button: "Send Message"
Alternative Contact Info:
Email: ahsan@example.com
Phone: (123) 456-7890
Social Media Links: Include links to your LinkedIn, GitHub, or Twitter profiles.</p>

<div className = {cssHero.btn }>
    <button className= {cssHero.btn2 }>Contact Mee</button>
</div>
    </div>
  )
}

export default HeroSection