import {
  LocalizedString,
  KeyReference,
  Money,
} from '@commercetools-test-data/commons';
import {
  CustomerDraft,
  type TCustomerDraft,
} from '@commercetools-test-data/customer';
import * as PaymentDraft from '../..';
import { PaymentMethodInfoDraft } from '../../../../payment-method-info';
import { PaymentStatusDraft } from '../../../../payment-status';
import { TransactionDraft, constants } from '../../../../transaction';
import { TPaymentDraftBuilder } from '../../../types';

const customerSebastianMueller = CustomerDraft.presets.sampleDataGoodStore
  .sebastianMuller()
  .build<TCustomerDraft>();

const sebastianMuellerPayment = (): TPaymentDraftBuilder =>
  PaymentDraft.presets
    .empty()
    .customer(
      KeyReference.presets.customer().key(customerSebastianMueller.key!)
    )
    .amountPlanned(Money.random().centAmount(395890).currencyCode('EUR'))
    .paymentMethodInfo(
      PaymentMethodInfoDraft.presets
        .empty()
        .method('Credit Card')
        .name(
          LocalizedString.presets
            .empty()
            ['en-US']('Credit Card')
            ['en-GB']('Credit Card')
        )
    )
    .paymentStatus(PaymentStatusDraft.presets.empty().interfaceText('Paid'))
    .transactions([
      TransactionDraft.presets
        .empty()
        .amount(Money.random().centAmount(395890).currencyCode('EUR'))
        .state(constants.TransactionState.Pending)
        .type(constants.TransactionType.Authorization)
        .interactionId('741852300'),
      TransactionDraft.presets
        .empty()
        .amount(Money.random().centAmount(395890).currencyCode('EUR'))
        .state(constants.TransactionState.Success)
        .type(constants.TransactionType.Charge)
        .interactionId('323044987'),
    ]);

export default sebastianMuellerPayment;