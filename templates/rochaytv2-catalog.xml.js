/*
Copyright (C) 2015 Apple Inc. All Rights Reserved.
See LICENSE.txt for this sample’s licensing information

Abstract:
A catalog template allows you to display groupings of related items, such as genres of movies or TV shows. View the list of groupings on the left and focus on one to see its items on the right.
*/
var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
    <head>
      <style>
      .whiteText {
        color: rgb(255, 255, 255);
      }
      </style>
    </head>
    <catalogTemplate>
        <background>
            <img src="${this.BASEURL}resources/crest-bkg-4.png" />
        </background>
      <banner>
        <background>
        <img src="${this.BASEURL}resources/rochaytv2-bkg-banner1.png" width="1920" height="360" />
      </background>
      </banner>
      <list>
        <section>
          <header>
            <title>Select Programme</title>
          </header>
          <listItemLockup>
            <title>In Conversation with...</title>
            <decorationLabel>7</decorationLabel>
            <relatedContent>
              <grid>
                <section>
                  <lockup vidUrl="https://s3-eu-west-1.amazonaws.com/rochaytv/Naveen-Jain-HD1080p.mov">
                    <img src="${this.BASEURL}resources/naveenjain.lcr" width="548" height="308" />
                    <title class="whiteText">Naveen Jain</title>
                  </lockup>
                  <lockup vidUrl="https://s3-eu-west-1.amazonaws.com/rochaytv/Paul-McKenna-HD1080p.mov">
                    <img src="${this.BASEURL}resources/paulmckenna2.lcr" width="548" height="308" />
                    <title class="whiteText">Paul McKenna</title>
                  </lockup>
                  <lockup vidUrl="https://s3-eu-west-1.amazonaws.com/rochaytv/Noel-Edmonds-HD1080p.mov">
                    <img src="${this.BASEURL}resources/noel-edmonds.lcr" width="548" height="308" />
                    <title class="whiteText">Noel Edmonds</title>
                  </lockup>
                  <lockup vidUrl="https://s3-eu-west-1.amazonaws.com/rochaytv/Better-Capital-HD1080p.mov">
                    <img src="${this.BASEURL}resources/mark-aldridge.lcr" width="548" height="308" />
                    <title class="whiteText">Mark Aldridge</title>
                  </lockup>
                  <lockup vidUrl="https://s3-eu-west-1.amazonaws.com/rochaytv/Stewart-McIntyre-HD1080p.mov">
                    <img src="${this.BASEURL}resources/stewart-mcintyre.lcr" width="548" height="308" />
                    <title class="whiteText">Stewart McIntyre</title>
                  </lockup>
                  <lockup vidUrl="https://s3-eu-west-1.amazonaws.com/rochaytv/Richard-Lambert-HD1080p.mov">
                    <img src="${this.BASEURL}resources/richard-lambert.lcr" width="548" height="308" />
                    <title class="whiteText">Richard Lambert</title>
                  </lockup>
                  <lockup vidUrl="https://s3-eu-west-1.amazonaws.com/rochaytv/Nigel-Stuart-HD1080p.mov">
                    <img src="${this.BASEURL}resources/nigel-stuart.lcr" width="548" height="308" />
                    <title class="whiteText">Nigel Stewart</title>
                  </lockup>
                </section>
              </grid>
            </relatedContent>
          </listItemLockup>
          <listItemLockup>
            <title>Luxury Insights...</title>
            <decorationLabel>1</decorationLabel>
            <relatedContent>
              <grid>
                <section>
                  <lockup vidUrl="https://s3-eu-west-1.amazonaws.com/rochaytv/SteinwayHD1080p.mov">
                    <img src="${this.BASEURL}resources/Steinway.lcr" width="548" height="308" />
                    <title class="whiteText">Steinway & Sons</title>
                  </lockup>
                </section>
              </grid>
            </relatedContent>
          </listItemLockup>
          <listItemLockup>
            <title>Luxury Events...</title>
            <decorationLabel>1</decorationLabel>
            <relatedContent>
              <grid>
                <section>
                  <lockup vidUrl="https://s3-eu-west-1.amazonaws.com/rochaytv/LLX-Promo-HD1080p.mov">
                    <img src="${this.BASEURL}resources/llx-thumbnail.lcr" width="548" height="308" />
                    <title class="whiteText">London Luxury Expo</title>
                  </lockup>
                </section>
              </grid>
            </relatedContent>
          </listItemLockup>
        </section>
      </list>
    </catalogTemplate>
  </document>`
}
