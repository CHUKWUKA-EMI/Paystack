declare class Paystack {
    private axiosFetch;
    private secretKey;
    constructor(secretKey: string);
    resolveAccountNumber(account_number: string, bank_code: string): Promise<{
        status: number;
        message: string;
        data: any;
    } | {
        status: any;
        message: any;
        data: {};
    }>;
    resolveCard(cardNumber: number): Promise<{
        status: number;
        message: string;
        data: any;
    } | {
        status: any;
        message: any;
        data: {};
    }>;
    createPlan(name: string, interval: string, amount: number): Promise<{
        status: number;
        message: string;
        data: any;
    } | {
        status: any;
        message: any;
        data: {};
    }>;
    fetchPlan(plan_code: string): Promise<{
        status: number;
        message: string;
        data: any;
    } | {
        status: any;
        message: any;
        data: {};
    }>;
    updatePlan(plan_code: string, name: string, interval: string, amount: number): Promise<{
        status: number;
        message: string;
        data: any;
    } | {
        status: any;
        message: any;
        data: {};
    }>;
    createSubscription(email: string, amount: number, reference: string, plan_code: string, invoice_limit: number): Promise<{
        status: number;
        message: string;
        data: any;
    } | {
        status: any;
        message: any;
        data: {};
    }>;
    initializeTransaction(email: string, amount: number, reference: string): Promise<{
        status: number;
        message: string;
        data: any;
    } | {
        status: any;
        message: any;
        data: {};
    }>;
    verifyPayment(reference: string): Promise<{
        status: number;
        message: string;
        data: any;
    } | {
        status: any;
        message: any;
        data: {};
    }>;
}
export default Paystack;
//# sourceMappingURL=utils.d.ts.map