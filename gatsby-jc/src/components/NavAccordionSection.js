// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// const SectionStyles = styled.div`
//   .section {
//     background: #e4e4e4;
//     border-bottom: 3px inset lightsteelblue;
//     padding: 5px 10px;
//   }
//   .clickable {
//     cursor: pointer;
//   }
//   .plusMinus {
//     float: left;
//     padding-right: 1rem;
//     font-family: Phosphate, Georgia, 'Times New Roman', Times, serif;
//   }
//   .downCaret {
//     float: right;
//     padding-left: 1rem;
//     font-family: Phosphate, Georgia, 'Times New Roman', Times, serif;
//   }
//   .openSection {
//     background: white;
//     border: 3px outset lightsteelblue;
//     margin-top: 10;
//     padding: 10px 20px;
//   }
// `;

// class AccordionSection extends Component {
//   static propTypes = {
//     children: PropTypes.instanceOf(Object).isRequired,
//     isOpen: PropTypes.bool.isRequired,
//     label: PropTypes.string.isRequired,
//     onClick: PropTypes.func.isRequired,
//   };

//   onClick = () => {
//     this.props.onClick(this.props.label);
//   };

//   render() {
//     const {
//       onClick,
//       props: { isOpen, label },
//     } = this;

//     return (
//       <SectionStyles className="sectionStyles">
//         <div className="section">
//           <div onClick={onClick} className="clickable">
//             {/* This code will use a plus/minus display
//             instead of a caret when closed/open */}
//             {/* <div className="plusMinus">
//               {!isOpen && <span>&#43;</span>}
//               {isOpen && <span>&#45;</span>}
//             </div> */}
//             {label}
//             <div className="downCaret">
//               {!isOpen && <span>&#9660;</span>}
//               {isOpen && <span>&#9650;</span>}
//             </div>
//           </div>
//           {isOpen && <div className="openSection">{this.props.children}</div>}
//         </div>
//       </SectionStyles>
//     );
//   }
// }

// export default AccordionSection;
