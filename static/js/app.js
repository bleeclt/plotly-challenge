function getPlots(id) {
    
    d3.json("../samples.json").then((sampledata) => {
        console.log(sampledata)

        var ids = sampledata.samples[0].otu_ids;
        console.log(ids)

        var sampleValues = sampledata.samples[0].sample_values.slice(0,10).reverse();
        console.log(sampleValues)

        var labels = sampledata.samples[0].otu_labels.slice(0,10);
        console.log(labels)

        //get top 10 otu ids for the plot OTU in descending
        var OTU_top = (sampledata.samples[0].otu_ids.slice(0,10)).reverse();
        
        // modify ids
        var OTU_id = OTU_top.map(d => "OTU " + d);
        console.log(`OTU_ids: ${OTU_id}`)
        
        