import React, { useState } from "react";
import Menu from "../components/Menu";
import SafetyElement from "../components/SafetyElement";

function Cooking101() {
  function openNav() {
    setWidth(20);
    setMainwidth(60);
    setMarginLeft(30);
  }
  function closeNav() {
    setWidth(0);
    setMainwidth(80);
    setMarginLeft(10);
  }
  const [width, setWidth] = useState(0);
  const [mainwidth, setMainwidth] = useState(80);
  const [marginLeft, setMarginLeft] = useState(10);
  return (
    <div>
      <Menu />
      <div className="cooking101-main-container">
        <div className="side-menu" onClick={() => openNav()}>
          &#9776;
        </div>
        <div id="sideNavBar" style={{ width: `${width}%` }}>
          <a
            href="javascript:void(0)"
            className="close-btn"
            onClick={() => closeNav()}
          >
            &times;
          </a>
          <a href="#introdction">Introduction</a>
          <a href="#kitchenBasics">Kitchen basics</a>
          <a href="#cookingTechniques">cooking techniques</a>
          <a href="#safetyHygiene">Safety and Hygiene</a>
          {/* <a href="#troubleshooting">Troubleshooting</a>
          <a href="#resources">Resources</a> */}
        </div>
        <div
          className="main-content"
          style={{ width: `${mainwidth}%`, marginLeft: `${marginLeft}%` }}
        >
          <section id="introdction">
            <h2>Introduction</h2>
            Welcome to Cooking 101! This page is designed for anyone who is new
            to cooking or wants to improve their basic cooking skills. Cooking
            can be a fun and rewarding activity, and with a few simple tips and
            techniques, anyone can learn how to make delicious meals at home. In
            this guide, we'll cover the essentials of cooking, from kitchen
            basics to safety and hygiene practices. We'll also provide tips on
            how to troubleshoot common cooking problems, and give you some
            resources to help you continue your culinary journey. Whether you're
            a college student learning to cook for the first time, a busy
            professional looking to save money by cooking at home, or simply
            someone who loves food and wants to learn more, this guide is for
            you. So, let's get started and explore the world of cooking
            together!
          </section>
          <section id="kitchenBasics">
            <h2>Kitchen Basics</h2>
            Before you start cooking, it's important to have a few basic tools
            and equipment in your kitchen. Here are some essential items you'll
            need:
            <div className="kitchenBasics-container">
              <div className="kitchenBasics-element">
                <div className="kitchenBasics-element-image">
                  <img
                    src="https://secure.img1-cg.wfcdn.com/im/97253762/resize-h600-w600%5Ecompr-r85/3581/35818251/Cookware+Sets.jpg"
                    alt="pans"
                    className="kitchenBasics-element-image-pic"
                  />
                </div>
                <b>Pots and pans:</b> You'll need at least one medium-sized pot
                and one skillet or frying pan. If you plan on cooking pasta, a
                larger pot is also useful.
              </div>
              <div className="kitchenBasics-element">
                <div className="kitchenBasics-element-image">
                  <img
                    src="https://cdn.shopify.com/s/files/1/1186/5476/files/BLACK_5_3026eaf6-a1fe-44e0-b92b-80727fa2a1db_1024x1024.jpg?v=1568123300"
                    alt="pans"
                    className="kitchenBasics-element-image-pic"
                  />
                </div>
                <b>Knives:</b> A chef's knife and a paring knife are two of the
                most important knives you'll need in your kitchen.
              </div>
              <div className="kitchenBasics-element">
                <div className="kitchenBasics-element-image">
                  <img
                    src="https://i5.walmartimages.com/asr/0189115b-7c2c-4eb7-9a58-a8a122a6bfcf.127c800b360874630b3c7f1123e7ddcc.jpeg"
                    alt="pans"
                    className="kitchenBasics-element-image-pic"
                  />
                </div>
                <b>Cutting board:</b>A good cutting board will protect your
                countertop and make chopping vegetables and fruits easier.
              </div>
              <div className="kitchenBasics-element">
                <div className="kitchenBasics-element-image">
                  <img
                    src="https://ae01.alicdn.com/kf/Hbc39cea09a5f4a40aacd8832fc1cc321P.jpg"
                    alt="pans"
                    className="kitchenBasics-element-image-pic"
                  />
                </div>
                <b>Measuring cups and spoons:</b> Measuring cups and spoons are
                essential for following recipes accurately.
              </div>
              <div className="kitchenBasics-element">
                <div className="kitchenBasics-element-image">
                  <img
                    src="https://www.webstaurantstore.com/images/products/large/645982/2303238.jpg"
                    alt="pans"
                    className="kitchenBasics-element-image-pic"
                  />
                </div>
                <b>Mixing bowls:</b> You'll need at least one large mixing bowl
                for making dough or mixing ingredients.
              </div>
              <div className="kitchenBasics-element">
                <div className="kitchenBasics-element-image">
                  <img
                    src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81hAyKAg0xS.jpg"
                    alt="pans"
                    className="kitchenBasics-element-image-pic"
                  />
                </div>
                <b>Utensils:</b> You'll need a variety of utensils, such as
                spatulas, spoons, and tongs, for stirring, flipping, and
                serving.
              </div>
              <div className="kitchenBasics-element">
                <div className="kitchenBasics-element-image">
                  <img
                    src="http://cdn.shopify.com/s/files/1/0617/2878/4620/products/03-full-circle-kind-collection-oven-mitt-1.jpg?v=1671009056"
                    alt="pans"
                    className="kitchenBasics-element-image-pic"
                  />
                </div>
                <b>Oven mitts:</b> You'll need oven mitts or potholders to
                protect your hands when handling hot dishes or pots.
              </div>
              <div className="kitchenBasics-element">
                <div className="kitchenBasics-element-image">
                  <img
                    src="https://i.ebayimg.com/images/g/RJEAAOSwG8lduvo0/s-l1600.jpg"
                    alt="pans"
                    className="kitchenBasics-element-image-pic"
                  />
                </div>
                <b>Kitchen timer:</b> A timer will help you keep track of
                cooking times and prevent overcooking or burning.
              </div>
              <div className="kitchenBasics-element">
                <div className="kitchenBasics-element-image">
                  <img
                    src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71OKCPkL45S.jpg"
                    alt="pans"
                    className="kitchenBasics-element-image-pic"
                  />
                </div>
                <b>Blender or food processor:</b> A blender or food processor
                can be useful for pureeing soups or making sauces.
              </div>
              <div className="kitchenBasics-element">
                <div className="kitchenBasics-element-image">
                  <img
                    src="https://www.pamperedchef.com/iceberg/com/product/1574-2-lg.jpg"
                    alt="pans"
                    className="kitchenBasics-element-image-pic"
                  />
                </div>
                <b>Baking sheets:</b> If you plan on baking, you'll need at
                least one baking sheet.
              </div>
              In addition to these basic tools and equipment, there are a few
              pantry staples that every beginner cook should have on hand, such
              as olive oil, salt, pepper, flour, sugar, and baking powder.
            </div>
          </section>
          <section id="cookingTechniques">
            <h2>Cooking Techniques</h2>
            Cooking is all about applying heat to ingredients to transform them
            into delicious meals. Here are some basic cooking techniques that
            every beginner cook should know:
            <div className="cookingTechniques-container">
              <div className="cookingTechniques-element">
                <div className="kitchenBasics-element-image">
                  <img
                    src="https://www.assaggioboston.com/news/wp-content/uploads/2021/10/shutterstock_1748041232.jpg"
                    alt="pans"
                    className="kitchenBasics-element-image-pic"
                  />
                </div>
                <b>Sautéing:</b> This technique involves cooking ingredients in
                a small amount of oil or butter over high heat. It's a quick and
                easy way to cook vegetables, meat, and seafood.
              </div>
              <div className="cookingTechniques-element">
                <div className="kitchenBasics-element-image">
                  <img
                    src="https://www.tasteofhome.com/wp-content/uploads/2021/09/GettyImages-1036815628.jpg?fit=700,1024"
                    alt="pans"
                    className="kitchenBasics-element-image-pic"
                  />
                </div>
                <b>Roasting:</b> Roasting involves cooking ingredients in the
                oven at high heat. This technique works well for meats, poultry,
                and vegetables.
              </div>
              <div className="cookingTechniques-element">
                <div className="kitchenBasics-element-image">
                  <img
                    src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_33/3404216/grilling-tools-kr-2x1-tease-200813.jpg"
                    alt="pans"
                    className="kitchenBasics-element-image-pic"
                  />
                </div>
                <b>Grilling:</b> Grilling involves cooking ingredients over an
                open flame or hot grill. It's a great way to cook meats,
                vegetables, and seafood.
              </div>
              <div className="cookingTechniques-element">
                <div className="kitchenBasics-element-image">
                  <img
                    src="https://i.insider.com/5d02a704daa48241e03ef192?width=700"
                    alt="pans"
                    className="kitchenBasics-element-image-pic"
                  />
                </div>
                <b>Baking:</b> Baking involves cooking ingredients in the oven
                at a lower temperature. This technique is commonly used for
                cakes, bread, and other baked goods.
              </div>
              <div className="cookingTechniques-element">
                <div className="kitchenBasics-element-image">
                  <img
                    src="https://static.toiimg.com/photo/92574348.cms"
                    alt="pans"
                    className="kitchenBasics-element-image-pic"
                  />
                </div>
                <b>Boiling:</b> Boiling involves cooking ingredients in a pot of
                boiling water. This technique is commonly used for pasta, rice,
                and vegetables.
              </div>
              <div className="cookingTechniques-element">
                <div className="kitchenBasics-element-image">
                  <img
                    src="https://static.toiimg.com/thumb/82287593.cms?resizemode=4&width=1200"
                    alt="pans"
                    className="kitchenBasics-element-image-pic"
                  />
                </div>
                <b>Stir-frying:</b> Stir-frying involves cooking ingredients in
                a wok or skillet over high heat. It's a quick and easy way to
                cook vegetables and meat.
              </div>
              <div className="cookingTechniques-element">
                <div className="kitchenBasics-element-image">
                  <img
                    src="https://www.simplyrecipes.com/thmb/x7_CE4Ah4p0BBKV3Ozvz3Lexj28=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-HT-Braise-Meat-and-Vegetables-LEAD-8-5944ee8e58f5424eb58364fe66aece9b.jpg"
                    alt="pans"
                    className="kitchenBasics-element-image-pic"
                  />
                </div>
                <b>Braising:</b> Braising involves cooking ingredients in a pot
                with a small amount of liquid over low heat for a long period of
                time. This technique is commonly used for tough cuts of meat.
              </div>
            </div>
            Each of these techniques requires a slightly different approach, but
            the basic principles of cooking remain the same: apply heat, season
            and flavor ingredients, and adjust cooking times and temperatures as
            needed.
          </section>
          <section id="safetyHygiene">
            <h2>Safety and Hygiene</h2>
            Cooking can be a fun and rewarding activity, but it's important to
            prioritize safety and hygiene in the kitchen. Here are some tips to
            help you cook safely and keep your kitchen clean:
            <div className="safetyHygiene-container">
              <div className="safetyHygiene-element">
                <SafetyElement text="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_51/3151621/191217-hand-washing-stock-cs-906a.jpg" />
                <div className="safetyHygiene-element-text">
                  <b>Wash your hands: </b>Before handling any food, make sure to
                  wash your hands with soap and warm water for at least 20
                  seconds.
                </div>
              </div>
              <div className="safetyHygiene-element">
                <SafetyElement text="https://crewcare.co.nz/admin_assets/blog/crewcare-cleaning-kitchen.jpg" />
                <div className="safetyHygiene-element-text">
                  <b>Keep your kitchen clean: </b>Wipe down counters,
                  appliances, and utensils with hot, soapy water before and
                  after use.
                </div>
              </div>
              <div className="safetyHygiene-element">
                <SafetyElement text="https://1.bp.blogspot.com/-rIlweacujZw/XdjE3PXRjMI/AAAAAAAAP08/d3tKWpyMPFcLBx0SncT64NKccXNrTPz8QCLcBGAsYHQ/s1600/Frozen-food-in-containers.jpg" />
                <div className="safetyHygiene-element-text">
                  <b>Store food properly: </b>Keep raw meats, poultry, and
                  seafood separate from other foods to prevent
                  cross-contamination. Store foods at the appropriate
                  temperature to prevent spoilage.
                </div>
              </div>
              <div className="safetyHygiene-element">
                <SafetyElement text="https://www.foodsafetynews.com/files/2015/02/Dial_thermometer_406x250-1.jpg" />
                <div className="safetyHygiene-element-text">
                  <b>Use a food thermometer: </b>Use a food thermometer to
                  ensure that meat and poultry are cooked to a safe internal
                  temperature.
                </div>
              </div>
              <div className="safetyHygiene-element">
                <SafetyElement text="https://www.dummies.com/wp-content/uploads/88400.image0.jpg" />
                <div className="safetyHygiene-element-text">
                  <b>Be careful with knives</b>Use a sharp knife and keep your
                  fingers out of the way to prevent injuries.
                </div>
              </div>
              <div className="safetyHygiene-element">
                <SafetyElement text="https://i.etsystatic.com/20249145/r/il/9a3e96/3302226455/il_340x270.3302226455_tfbk.jpg" />
                <div className="safetyHygiene-element-text">
                  <b>Use caution with hot surfaces: </b>Use oven mitts or
                  potholders to handle hot dishes and keep flammable objects
                  away from hot surfaces.
                </div>
              </div>
              <div className="safetyHygiene-element">
                <SafetyElement text="http://www.slc.gov/fire/wp-content/uploads/sites/47/2020/09/Kitchen-Safety-2-1024x498.png" />
                <div className="safetyHygiene-element-text">
                  <b>Practice fire safety: </b>Keep a fire extinguisher in the
                  kitchen and never leave the stove unattended when cooking.
                </div>
              </div>
              <div className="safetyHygiene-element">
                <SafetyElement text="https://i.ytimg.com/vi/Lfj8SKFlTpI/maxresdefault.jpg" />
                <div className="safetyHygiene-element-text">
                  <b>Dispose of waste properly: </b>Dispose of food waste and
                  packaging in the appropriate bin and clean up spills and
                  messes promptly.
                </div>
              </div>
            </div>
            By following these simple tips, you can help prevent foodborne
            illness, injuries, and kitchen fires.
          </section>
          {/* <section id="troubleshooting">
            <h2>Troubleshooting</h2>
            Even the most experienced cooks can run into problems in the
            kitchen. Here are some common cooking issues and how to fix them:
            <div className="troubleshooting-container">
              <div className="troubleshooting-element">
                Burnt food: If your food is burnt, remove it from the heat
                immediately. Try scraping off the burnt parts or trimming them
                away. Next time, try cooking at a lower temperature or for a
                shorter amount of time.
              </div>
              <div className="troubleshooting-element">
                Overcooked or undercooked food: If your food is overcooked or
                undercooked, adjust the cooking time or temperature for next
                time. For meats and poultry, use a food thermometer to ensure
                they're cooked to a safe internal temperature.
              </div>
              <div className="troubleshooting-element">
                Lumpy sauces or gravies: If your sauce or gravy is lumpy, try
                whisking vigorously or using an immersion blender to smooth it
                out. You could also strain it through a fine-mesh sieve.
              </div>
              <div className="troubleshooting-element">
                Dry or tough meat: If your meat is dry or tough, it may have
                been overcooked. Try cooking at a lower temperature or for a
                shorter amount of time. You could also try marinating the meat
                before cooking to help tenderize it.
              </div>
              <div className="troubleshooting-element">
                Flat baked goods: If your baked goods turn out flat, it may be
                due to old baking powder or baking soda. Make sure to use fresh
                leavening agents and follow the recipe carefully.
              </div>
              <div className="troubleshooting-element">
                Stuck-on food: If food is stuck to the bottom of the pan, try
                soaking the pan in hot, soapy water. You could also use a
                spatula or scraper to loosen the food.
              </div>
              <div className="troubleshooting-element">
                Too salty or too spicy: If your dish is too salty or too spicy,
                try diluting it with additional ingredients or serving it with a
                neutralizing food like bread or rice.
              </div>
            </div>
            Remember, cooking is all about experimentation and learning from
            your mistakes. Don't be afraid to try new things and make
            adjustments along the way.
          </section> */}
          {/* <section id="resources">
            <h2>Resources</h2>
          </section> */}
        </div>
      </div>
    </div>
  );
}

export default Cooking101;
