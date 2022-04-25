import React from 'react';
import { Link } from 'react-router-dom';
import StiInfo from './StiInfo';

const HomePage = () => {
    return (
        <>
            <div className="section">
                <div id="top" class="section main wf-section">
                    <div class="w-container">
                        <div class="w-row">
                            <div class="w-col w-col-6">
                                <h1 class="main-heading">Get an STI Test Recommendation with deSTIgma</h1>
                                <p class="main-subtitle">The deSTIgma questionnaire will help you evaluate your risk for STIs and STDs, and connect you to resources near you.</p>
                                <p> <Link to="/consentform" class="button">Let&#x27;s Go!</Link><a href="#info1" transition="ease" class="button hollow">Scroll down to learn more!</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
              <h1 class="heading-home-1" id="info1"> Sexually Transmitted Infections and Diseases (STIs): A Hidden Epidemic </h1>
              <div class= "row">
                <div class="column left">
                  <img src="https://thumbs.gfycat.com/BitesizedDeafeningFlounder-max-1mb.gif" id="casesperyear" class="graph1" alt="sans"/></div>

                <div class="column right">
                  <div class="subheading-home-1"> Reported STIs reached an all-time high for the 6th year in a row in 2019.</div>
                  <div class="text-block-1"> Despite medical advances, STI cases increased for nearly the past decade, indicating a <strong> desperate need for improved education and awareness!</strong> </div>
                </div>
              </div>

              <div class = "row">
                <div class="column left">
                <div class="subheading-home-1"> Gonorrhea and syphilis cases drastically increased in 2020 during the COVID-19 pandemic.</div>
                <div class="text-block-1">After COVID-19 stay-at-home orders, weekly STD cases reported dropped compared to 2019 levels, but resurged by the end of 2020.</div>
                </div>

                <div class="column right">
                  <img src="https://thumbs.gfycat.com/BitesizedDeafeningFlounder-max-1mb.gif" id="weeklycases" class="graph2"/>
                </div>
              </div>

              <img id="sti-cost"/>
            </div>

            <div className="section2">
              <h1 class="heading-home-1">The Stigma Behind STIs</h1>
              <div class="text-block-2">Do you feel guilty about a broken arm? A cold?</div>
              <div class="text-block-2"><strong>##% of people reported feeling shame or embarrassment when visiting a physician for STI testing.*</strong></div>
              <div class="text-block-small">*According to ###, surveying ### individuals.</div>
            </div>

            <div class="section">
              <div class="heading-home-1"><i>deSTIgma</i> streamlines the STI care-seeking process.</div>
              <div class="text-block-2">Feeling symptoms of an STI, or just want to learn about sexual health? You can find everything you need on the <i>deSTIgma</i> website.</div>
              <ol class="list1">
                <li class="list-item">Find out which STIs and related conditions you may be at risk for, based on your own symptoms.</li>
                <li class="list-item">Locate STI clinics and care centers near you.</li>
                <li class="list-item">Purchase physician-approved LetsGetChecked© at-home STI test kits.</li>
              </ol>
              <div class="text-block-2 pad-vertical">Ready to get started?</div>
              <p><Link to="/consentform" class="button">Let&#x27;s Go!</Link><a href="/results" class="button hollow">Clinic Locator</a></p>
            </div>

            <div class="section3">
              <div class="text-block-small light-font">Produced in partnership with</div>
              <img src="Columbia-logo.png" alt="Columbia School of Engineering logo"/>
            </div>


            <div class=""></div>
        </>
    );
}

export default HomePage;
