import React, { Component } from 'react';
import './App.scss';
import './index.scss';

class App extends Component {

  spacingIds = ['sm-1','sm-2','sm-3','sm-4','md-1','md-2','md-3','md-4','lg-1','lg-2','lg-3','lg-4'];
  colorPallette = ['primary', 'grey', 'green', 'orange'];
  colorShades = ['100','200','300','400','500','600', '700'];
  
  paragraphText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere dignissim posuere. Vivamus quis volutpat metus. Suspendisse vel rhoncus est, quis egestas nulla. Etiam condimentum, magna eget ultrices gravida, ipsum ligula cursus neque, vitae pulvinar felis ante quis mi. Quisque lacus nulla, viverra ac ultrices in, porta ac justo. Interdum et malesuada fames ac ante ipsum primis in faucibus.';
  headingText = 'The quick brown fox jumps over the lazy dog';

  btnTypes = ['','primary','success','warning', 'link'];
  btnSizes = ['btn-lg', 'btn-md', 'btn-sm', 'btn-xs']

  render() {
    return (
      <div className="App">
         <section id="buttons" className='margin-top md-3'>
          <h3 className='margin-bottom sm-4'>Buttons</h3> 
          {
            this.btnTypes.map(type => {
              return (
                <div>
                  { 
                    this.btnSizes.map(size => {
                      let classes = `${size} ${type}`;
                      return (
                          <button className={classes}>Button</button>
                      );
                    })
                  }
                
                  {
                    this.btnSizes.map(size => {
                        let classes = `${size} ${type}`;
                        return (
                            <button className={classes} disabled>Button</button>
                        );
                      })
                  }
                <br/>
                { 
                    this.btnSizes.map(size => {
                      if(type === 'link') return;
                      let classes = `${size} ${type} outline`;
                      return (
                          <button className={classes}>Button</button>
                      );
                    })
                  }
                
                  {
                    this.btnSizes.map(size => {
                        if(type === 'link') return;
                        let classes = `${size} ${type} outline`;
                        return (
                            <button className={classes} disabled>Button</button>
                        );
                      })
                  }
                </div>

              )
            })
          } 
        </section>

        <section id="typography">
          <h3 className='margin-bottom sm-4'>Typography</h3>
          <h1>{this.headingText}</h1>
          <p>{this.paragraphText}</p>
          <h2>{this.headingText}</h2>
          <p>{this.paragraphText}</p>
          <h3>{this.headingText}</h3>
          <p>{this.paragraphText}</p>
          <h4>{this.headingText}</h4>
          <p>{this.paragraphText}</p>
          <h5>{this.headingText}</h5>
          <p>{this.paragraphText}</p>
          <h6>{this.headingText}</h6>
          <p>{this.paragraphText}</p>
        </section>

        <section id="spacing" className='margin-top md-3'>
          <h3 className='margin-bottom sm-4'>Spacing Guide</h3>
          <ul className='spacing-guide'>
            {this.spacingIds.map(el => {
              let classes = `padding-right ${el} bg-green`;
              return (
                <li
                  key={el}
                  className={classes}>
                  <span>{el}</span>              
                </li>
              )
            })}
          </ul>
        </section>

        <section id="color-pallette" className='margin-top md-3'>
          <h3 className='margin-bottom sm-4'>Color Pallette</h3>
          {this.colorPallette.map(color => {
            return (
              <ul key={color} className="pallette padding sm-1">
                {this.colorShades.map(shade => {
                  let classes = `bg-${color}-${shade}`;
                  return <li key={shade} className={classes}></li>
                })}
              </ul>
            );
          })}
        </section>

       

      </div>
    );
  }
}

export default App;
