import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heroes';

  showInfo = true;
  buttonName = 'Show';

  toggleInfo() {
    this.showInfo = !this.showInfo;
    // CHANGE THE NAME OF THE BUTTON.
    // if(this.showInfo)
    //   this.buttonName = 'Hide';
    // else
    //   this.buttonName = 'Show';


  }

  nawigacja = [
    {
      grupa: true,
      
      nazwa: 'ABC-1',
      opis: 'opis-1',
      elementy: [
        {
          grupa: false,
          
          nazwa: 'ABC-1a',
          opis: 'opis-1a'
        },
        {
          grupa: false,
          
          nazwa: 'ABC-1b',
          opis: 'opis-1b'
        },
        {
          grupa: true,
          
          nazwa: 'ABC-1c',
          opis: 'opis-1c',
          elementy: [
            {
              grupa: false,
              
              nazwa: 'ABC-1c1',
              opis: 'opis-1c1'
            },
            {
              grupa: false,
              
              nazwa: 'ABC-1c2',
              opis: 'opis-1c2'
            },
            {
              grupa: false,
              
              nazwa: 'ABC-1c3',
              opis: 'opis-1c3'
            },
            {
              grupa: false,
              
              nazwa: 'ABC-1c4',
              opis: 'opis-1c4'
            }
          ]
        },
        {
          grupa: false,
          
          nazwa: 'ABC-1d',
          opis: 'opis-1d'
        }
      ]
    },
    {
      grupa: true,
      
      nazwa: 'ABC-2',
      opis: 'opis-2',
      elementy: [
        {
          grupa: true,
          
          nazwa: 'ABC-2a',
          opis: 'opis-2a',
          elementy: [
            {
              grupa: false,
              
              nazwa: 'ABC-2a1',
              opis: 'opis-2a1'
            },
            {
              grupa: false,
              
              nazwa: 'ABC-2a2',
              opis: 'opis-2a2'
            },
            {
              grupa: false,
              
              nazwa: 'ABC-2a3',
              opis: 'opis-2a3'
            },
            {
              grupa: false,
              
              nazwa: 'ABC-2a4',
              opis: 'opis-2a4'
            }
          ]
        },
        {
          grupa: true,
          
          nazwa: 'ABC-2b',
          opis: 'opis-2b',
          elementy: [
            {
              grupa: false,
              
              nazwa: 'ABC-2b1',
              opis: 'opis-2b1'
            },
            {
              grupa: false,
              
              nazwa: 'ABC-2b2',
              opis: 'opis-2b2'
            },
            {
              grupa: false,
              
              nazwa: 'ABC-2b3',
              opis: 'opis-2b3'
            },
            {
              grupa: false,
              
              nazwa: 'ABC-2b4',
              opis: 'opis-2b4'
            }
          ]
        }
      ]
    },
    {
      grupa: true,
      
      nazwa: 'ABC-3',
      opis: 'opis-3',
      elementy: [
        {
          grupa: false,
          
          nazwa: 'ABC-3a',
          opis: 'opis-3a'
        },
        {
          grupa: true,
          
          nazwa: 'ABC-3b',
          opis: 'opis-3b',
          elementy: [
            {
              grupa: false,
              
              nazwa: 'ABC-3b1',
              opis: 'opis-3b1'
            },
            {
              grupa: true,
              
              nazwa: 'ABC-3b2',
              opis: 'opis-3b2',
              elementy: [
                {
                  grupa: false,
                  
                  nazwa: 'ABC-3b2a',
                  opis: 'opis-3b2a'
                },
                {
                  grupa: true,
                  
                  nazwa: 'ABC-3b2b',
                  opis: 'opis-3b2b',
                  elementy: [
                    {
                      grupa: false,
                      
                      nazwa: 'ABC-3b2b1',
                      opis: 'opis-3b2b1'
                    },
                    {
                      grupa: false,
                      
                      nazwa: 'ABC-3b2b2',
                      opis: 'opis-3b2b2'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      grupa: false,
      
      nazwa: 'ABC-4',
      opis: 'opis-4'
    },
    {
      grupa: false,
      
      nazwa: 'ABC-5',
      opis: 'opis-5'
    },
    {
      grupa: false,
      
      nazwa: 'ABC-6',
      opis: 'opis-6'
    },
    {
      grupa: false,
      
      nazwa: 'ABC-7',
      opis: 'opis-7'
    },
    {
      grupa: true,
      
      nazwa: 'ABC-8',
      opis: 'opis-8',
      elementy: [
        {
          grupa: false,
          
          nazwa: 'ABC-8a',
          opis: 'opis-8a'
        },
        {
          grupa: false,
          
          nazwa: 'ABC-8b',
          opis: 'opis-8b'
        },
        {
          grupa: false,
          
          nazwa: 'ABC-8c',
          opis: 'opis-8c'
        },
        {
          grupa: false,
          
          nazwa: 'ABC-8d',
          opis: 'opis-8d'
        }
      ]
    },
    {
      grupa: false,
      
      nazwa: 'ABC-9',
      opis: 'opis-9'
    }
  ];
  constructor(public translate: TranslateService) {
    translate.addLangs(['eng', 'deu', 'pol', 'ukr', 'ces', 'lit', 'hun']);
    translate.setDefaultLang('pol');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/eng|pol/) ? browserLang : 'pol');
  }
}
