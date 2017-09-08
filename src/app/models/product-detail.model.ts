export class ProductDetail {
    CustomerReview: Array<any>; // I would eventually create custom resource types for customer-reviews

    DPCI: string;

    Images: Array<any>; // I would eventually create custom resource types for images
    
    ItemDescription: Array<any>;
    
    Offers: Array<any>;
    
    POBoxProhibited: string;

    PackageDimension: Array<any>;

    Promotions: Array<any>;

    ReturnPolicy: Array<any>;

    UPC: string;

    applyCouponLink: boolean;
    
    buyable: boolean;

    callOutMsg: string;

    catEntryId: string;

    classId: string;

    department: string;

    eligibleFor: string;

    inventoryCode: string;

    inventoryStatus: string;

    itemId: string;
    
    itemType: string;

    manufacturer: string;

    manufacturerPartNumber: number;

    packageQuantity: number;

    partNumber: number;

    purchasingChannel: string;

    purchasingChannelCode: number;

    shortDescription: string;

    title: string;

    webclass: string;
}
