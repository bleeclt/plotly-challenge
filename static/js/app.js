function getPlots(id) {
    
    d3.json("../samples.json").then((sampledata) => {
        console.log(sampledata)

        var ids = sampledata.samples[0].otu_ids;
        console.log(ids)

        var sampleValues = sampledata.samples[0].sample_values.slice(0,10).reverse();
        console.log(sampleValues)

        var labels = sampledata.samples[0].otu_labels.slice(0,10);
        console.log(labels)

        // top 10 otu ids for the plot OTU in descending
        var OTU_top = (sampledata.samples[0].otu_ids.slice(0,10)).reverse();
        
        // modify ids
        var OTU_id = OTU_top.map(d => "OTU " + d);
        console.log(`OTU_ids: ${OTU_id}`)
        
        // top 10 labels for plot
        var labels = sampledata.samples[0].otu_labels.slice(0,10);
        console.log(`OTU_labels: ${labels}`)
        var trace = {
            x: sampleValues,
            y: OTU_id,
            text: labels,
            marker: {
                color: 'blue'},
            type: "bar",
            orientation: "h",
        };

        var data = [trace];
        // layout
        var layout = {
            title: "Top 10 OTU",
            yaxis:{
                tickmode: "linear",
            },
            margin: {
                l: 100,
                r: 100,
                t: 100,
                b: 30 
            }
        };
        // bar plot
    Plotly.newPlot("bar", data, layout);

        // bubble plot
        var trace1 = {
            x: sampledata.samples[0].otu_ids,
            y: sampledata.samples[0].sample_values,
            mode: "markers",
            marker: {
                size: sampledata.samples[0].sample_values,
                color: sampledata.samples[0].otu_ids
            },
            text: sampledata.samples[0].otu_labels
        };
        var layout1 = {
            xaxis: {title: "OTU ID"},
            height: 600,
            width: 1000
        };
        var data1 = [trace1];

    Plotly.newPlot("bubble", data1, layout1);
    });
}
