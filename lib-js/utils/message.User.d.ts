export declare function messageUser<usertype extends string>(rawMessage: usertype | undefined): usertype extends string ? string : string | undefined;
