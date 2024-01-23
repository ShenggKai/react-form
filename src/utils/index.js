/**
 * This function calculates the top position of a floating button in relation to a form and a question element. For more information, view the demonstration here: "https://www.figma.com/file/fejMtzKVRrDz8un0wQkV4z/Demonstration%3A-Floating-button?type=whiteboard&node-id=0%3A1&t=dHLcp3rei6HB45th-1"
 * 
 *
 * @param {Object} formRef - A reference to the form element.
 * @param {Object} leftRef - A reference to the left element.
 * @param {Object} floatButtonRef - A reference to the floating button element.
 * @param {Object} questionElement - The question element.
 *
 * @returns {number} The top position of the floating button.
 */

export const getFloatButtonTop = (formRef, leftRef, floatButtonRef, questionElement) => {
  const formElement = formRef.current;
  const leftElement = leftRef.current;
  const floatElement = floatButtonRef.current;

  const questionTop = questionElement ? questionElement.getBoundingClientRect().top : 0;
  // form top in start = left top
  const formTop = formElement ? formElement.getBoundingClientRect().top + 15 : 0;
  const leftTop = leftElement ? leftElement.getBoundingClientRect().top : 0;

  const questionBottom = questionElement ? questionElement.getBoundingClientRect().bottom : 0;
  const formBottom = formElement ? formElement.getBoundingClientRect().bottom : 0;

  const floatButtonHeight = floatElement ? floatElement.getBoundingClientRect().height : 0;
  const questionHeight = questionElement ? questionElement.getBoundingClientRect().height : 0;

  let floatButtonTop = 0;

  // in normal, when the questions not exceed the viewport
  if (leftTop === formTop) floatButtonTop = questionTop - formTop;
  // when the questions exceed the viewport
  else if (leftTop < formTop) floatButtonTop = questionTop - formTop + (formTop - leftTop);

  // When the clicked question is above the viewport, the floating button should remain at top
  if (floatButtonTop < formTop - leftTop) floatButtonTop = formTop - leftTop;
  // When the clicked question is below the viewport, the floating button should remain at bottom
  else if (questionTop > formBottom - floatButtonHeight)
    floatButtonTop =
      floatButtonTop - (questionBottom - formBottom - floatButtonHeight - (questionHeight - 214));

  return floatButtonTop;
};
