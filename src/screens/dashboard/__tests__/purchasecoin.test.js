import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import PurchaseForm from '../PurchaseCoin';
import renderer from 'react-test-renderer'

describe('NewMessageForm', () => {
  describe('clicking purchase button', () => {
    it('click the purchase button', () => {
        const sendHandler = jest.fn();
      const { getByTestId } = render(<PurchaseForm  onSend={sendHandler}/>);

      fireEvent.changeText(getByTestId('purchasePrice'), '10');
      fireEvent.press(getByTestId('purchaseButton'));
      expect(sendHandler).toHaveBeenCalledWith('10');
    });
    it('check methods and state', () => {
     let PurchaseFormData = renderer.create(<PurchaseForm/>).getInstance();
     expect(PurchaseFormData.handleTest(10)).toEqual(10);
    });
  });
});