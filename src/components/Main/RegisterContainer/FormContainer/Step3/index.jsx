import Input from "../Input";
import CartContext from "../../../CartContext";

function Step3() {
    return <CartContext.Consumer>
        {({ register, setRegister }) => {
            function onChange(callback) {
                return function(event) {
                    callback(event);
                    setRegister({...register});
                }
            }

            return <form class="col col-12" data-phase="credit-card">
                <h3 class="form-title">付款資訊</h3>
                <section class="form-body col col-12">
                    <div class="col col-12">
                        <Input
                            groupClass="input-w-lg-4 input-w-sm-full"
                            label="持卡人姓名"
                            placeholder="John Doe"
                            value={register.cardName}
                            onChange={onChange(event => register.cardName = event.target.value)}
                        />
                    </div>
                    <div class="col col-12">
                        <Input
                            groupClass="input-w-lg-4 input-w-sm-full"
                            label="卡號"
                            placeholder="1111 2222 3333 4444"
                            value={register.cardNumber}
                            onChange={onChange(event => register.cardNumber = event.target.value)}
                        />
                    </div>
                    <div class="col col-12">
                        <Input
                            groupClass="input-w-lg-3 input-w-sm-s3"
                            label="有效期限"
                            placeholder="MM/YY"
                            value={register.cardDate}
                            onChange={onChange(event => register.cardDate = event.target.value)}
                        />
                        <Input
                            groupClass="input-w-lg-3 input-w-sm-s3"
                            label="CVC / CCV"
                            placeholder="123"
                            value={register.cardCvC}
                            onChange={onChange(event => register.cardCvC = event.target.value)}
                        />
                    </div>
                </section>
            </form>
        }}
    </CartContext.Consumer>
}

export default Step3;