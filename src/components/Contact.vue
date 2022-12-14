<template>
    <section id="contact">
  
  <h1 class="section-header">Contact Us</h1>
  <article class="contact-info">
      <h3>Want To Send Us A Message?</h3>
      <p>
        Fill in this form below and we will answer all your inquiries.
      </p>
      <p>If you also want to share anything about Nigeria's culture that you wish to be added on the site, please fill in the form below.</p>
      <p>
        Our office is availiable Mondays to Fridays from 9am to 5pm. Thank you for Contacting Us!
      </p>
    </article>
  
  <div class="contact-wrapper">

    
  
  <!-- Left contact page --> 
    
    <form id="contact-form" class="form-horizontal" role="form">
       
      <div class="form-group">
        <div class="col-sm-12">
          <input type="text" class="form-control" id="name" placeholder="NAME" name="name" value="" required style="margin-bottom:10px;">
        </div>
      </div>

      <div class="form-group">
        <div class="col-sm-12">
          <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" value="" required style="margin-bottom:10px;">
        </div>
      </div>

      <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message" required style="font-family: Lato;"></textarea>
      
      <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
        <div class="alt-send-button">
            <font-awesome-icon icon="fa-solid fa-paper-plane" style="font-size: larger;"/><span class="send-text">SEND</span>
        </div>
      
      </button>
      
    </form>
    
  <!-- Left contact page --> 
    
      <div class="direct-contact-container">

        <ul class="contact-list">
          <li class="list-item"><font-awesome-icon icon="fa-solid fa-location-dot" style="color:white; font-size: large;"/><span class="contact-text place">Melbourne</span></li>
          <li class="list-item"><font-awesome-icon icon="fa-solid fa-phone" style="color:white; font-size: large;"/><span class="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(61) 3445-2368</a></span></li>
          <li class="list-item"><font-awesome-icon icon="fa-solid fa-envelope" style="color:white; font-size: large;"/><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">wena@gma.com</a></span></li>
          
        </ul>

        <hr>
      </div>
    
  </div>
  
</section>  
</template>

<style scoped>

html{
  background-color: #041010;
}

#contact {
  width: 100%;
  height: 100%;
  margin-top:2rem;
  margin-bottom:4rem;
}

.section-header {
  text-align: center;
  margin: 0 auto;
  padding: 40px 0;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 6px;
  padding-bottom:4rem;
}

.contact-info{
 text-align: justify;
  margin: 0 auto;
  color: #fff;
  padding-bottom: 40px;
  padding-left:4rem;
  padding-right:2rem;
}

@media screen and (max-width:410px){
    .form-control, 
textarea {
    margin-right:2rem;
}
}

.contact-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  max-width: 840px;
}

/* Left contact page */
.form-horizontal {
  float: left;
  max-width: 400px;
  font-family: 'Lato';
  font-weight: 400;
}

.form-control, 
textarea {
  width:100%;
  background-color: #000;
  color: #fff;
  letter-spacing: 1px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 12px 20px;
}

.send-button {
  margin-top: 15px;
  height: 34px;
  width: 100%;
  overflow: hidden;
  transition: all .2s ease-in-out;
}

.alt-send-button {
  width: 400px;
  height: 34px;
  transition: all .2s ease-in-out;
}

.send-text {
  display: block;
  margin-top: 10px;
  font: 700 12px 'Lato', sans-serif;
  letter-spacing: 2px;
}

.alt-send-button:hover {
  transform: translate3d(0px, -29px, 0px);
}

/* Begin Right Contact Page */
.direct-contact-container {
  max-width: 400px;
}

/* Location, Phone, Email Section */
.contact-list {
  list-style-type: none;
  margin-left: -30px;
  padding-right: 20px;
}

.list-item {
  line-height: 4;
  color: #aaa;
}

.contact-text {
  font: 300 18px 'Lato', sans-serif;
  letter-spacing: 1.9px;
  color: #bbb;
}

.place {
  margin-left: 62px;
}

.phone {
  margin-left: 56px;
}

.gmail {
  margin-left: 53px;
}

.contact-text a {
  color: #bbb;
  text-decoration: none;
  transition-duration: 0.2s;
}

.contact-text a:hover {
  color: #fff;
  text-decoration: none;
}

hr {
  border-color: rgba(255,255,255,.6);
}

/* Begin Media Queries*/
@media screen and (max-width: 850px) {
  .contact-wrapper {
    display: flex;
    flex-direction: column;
  }
  .direct-contact-container, .form-horizontal {
    margin: 0 auto;
  }  
  
  .direct-contact-container {
    margin-top: 60px;
    max-width: 300px;
  }    
  .social-media-list li {
    height: 60px;
    width: 60px;
    line-height: 60px;
  }
  .social-media-list li:after {
    width: 60px;
    height: 60px;
    line-height: 60px;
  }
}

@media screen and (max-width: 569px) {

  .direct-contact-container, .form-wrapper {
    float: none;
    margin: 0 auto;
  }  
  .form-control, textarea {
    
    margin: 0 auto;
  }
 
  
  .name, .email, textarea {
    width: 280px;
  } 
  
  .direct-contact-container {
    margin-top: 60px;
    max-width: 280px;
  }  
  .social-media-list {
    left: 0;
  }
  .social-media-list li {
    height: 55px;
    width: 55px;
    line-height: 55px;
    font-size: 2rem;
  }
  .social-media-list li:after {
    width: 55px;
    height: 55px;
    line-height: 55px;
  }
  
}

@media screen and (max-width: 410px) {
  .send-button {
    width: 99%;
  }
}
</style>