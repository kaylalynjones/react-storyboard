import React from 'react';
import ContrastAwareText from '../ContrastAwareText';
import './_colorInput.scss';

export default class ColorInput extends React.Component {
  constructor() {
    super();
    this.state = {
      isExpanded: false,
      value: '#E0E0E0',
    };
  }
  expandInput() {
    this.setState({
      isExpanded: true,
    });
  }

  collapseInput() {
    this.setState({
      isExpanded: false,
    });
  }
  previewColor() {
    this.setState({
      value: this.input.value,
    });
  }
  handleColorSubmission() {
    // event.preventDefault();
    // const color = this.input.value.substr(0, 7);
    //
    // if (!color || color === '') {
    //   return;
    // }
    //
    // this.input.value = '#E0E0E0';
    // // this.props.onAddColor(color);
    this.collapseInput();
    // this.clearPreviewColor();
    // this.input.blur();
  }


  clearPreviewColor() {
    this.setState({
      value: '',
    });
  }

  render() {
    let classNames = this.state.isExpanded
                    ? 'custom-color--expanded'
                    : 'custom-color';

    return (
      <div className={classNames}>
        <div role="button"
          className="custom-color__button"
          onClick={this.expandInput.bind(this)}
          style={{ backgroundColor: this.state.value }}
        >
          <span aria-label="color" className="custom-color__label">
            <ContrastAwareText origBackgroundColor={this.state.value}>&#43;</ContrastAwareText>
          </span>
          <label htmlFor="color">
            <input
              aria-label="color-input"
              className="custom-color__input"
              id="color"
              type="text"
              placeholder="Add a hex value"
              value={this.state.value}
              ref={(input) => { this.input = input; }}
              onChange= {this.previewColor.bind(this)}
              onBlur={this.handleColorSubmission.bind(this)}
            />
          </label>
        </div>
      </div>
    );
  }
}

ColorInput.propTypes = {
  value: React.PropTypes.string,
};

// class ColorInput extends React.Component {
//   constructor (props) {
//     super(props);
//     this.state = {
//       isExpanded : false,
//       color: ''
//     };
//   };
//
//   propTypes : {
//     onAddColor : React.PropTypes.func.isRequired
//   };
//
//   handleColorSubmission(event) {
//     event.preventDefault();
//     var color = this.input.value.substr(0, 7);
//
//     if (!color || color === '') {
//       return;
//     }
//
//     this.input.value = '';
//     this.props.onAddColor(color);
//     this.collapseInput();
//     this.clearPreviewColor();
//     this.input.blur();
//   }
//
//   expandInput() {
//     this.setState({
//       isExpanded: true
//     });
// //   }
//
//   collapseInput() {
//     this.setState({
//       isExpanded: false
//     });
//   }
//
//   previewColor() {
//     this.setState({
//       color: this.input.value
//     });
//   }

  // clearPreviewColor() {
  //   this.setState({
  //     color: ''
  //   });
  // }

//   render() {
//     var classNames = 'color-custom';
//
//     if (this.state.isExpanded) {
//       classNames += ' expanded';
//     }
//
//     return(
//       <form className={classNames} onSubmit={ this.handleColorSubmission.bind(this) }>
//         <div className="color-custom__button" style={{backgroundColor: this.state.color}} onClick={ this.expandInput.bind(this) }>
//           <span className="color-custom__label">&#43;</span>
//           <label for="color">
//             <input className="color-custom__input"
//                    id="color"
//                    type="text"
//                    placeholder="#3D9970"
//                    ref={(input) => this.input = input}
//                    onChange= { this.previewColor.bind(this) }
//                    onBlur={ this.handleColorSubmission.bind(this) } />
//           </label>
//         </div>
//       </form>
//     );
//   }
// }
