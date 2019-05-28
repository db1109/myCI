trigger cv_trigger on ContentVersion (after insert) {
    list<contentdocumentlink> listShares = new list<contentdocumentlink>();
    for(ContentVersion c : Trigger.New) { 
        contentdocumentlink cdl = new contentdocumentlink(ContentDocumentId=c.ContentDocumentId,LinkedEntityId='0054J000000fv57QAA',Sharetype ='V');
		listShares.add(cdl);}   
    insert listShares;}