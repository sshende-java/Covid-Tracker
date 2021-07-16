package com.coronatracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.coronatracker.models.ContainerObject;
import com.coronatracker.models.LocationStats;
import com.coronatracker.services.CoronaVirusDataService;

@RestController
public class HomeController {

	@Autowired
	CoronaVirusDataService coronaVirusDataService;
	
//	@GetMapping("/")
	public List<LocationStats> home(Model model)
	{
		List<LocationStats> allStats = coronaVirusDataService.getAllStats();
		int totalReportedCases = allStats.stream().mapToInt(e -> e.getLatestTotalCases()).sum();
		
		
		model.addAttribute("title","Covid-19 Tracker App");
		model.addAttribute("locationStats",allStats);
		model.addAttribute("totalReportedCases",totalReportedCases);
		return allStats;
	}

	@CrossOrigin(origins = "http://localhost:8282/")
	@GetMapping("/")
	public ContainerObject homeTest(Model model)
	{
		List<LocationStats> allStats = coronaVirusDataService.getAllStats();
		int totalReportedCases = allStats.stream().mapToInt(e -> e.getLatestTotalCases()).sum();
		
		ContainerObject cto = new ContainerObject();
		cto.setLocationStats(allStats);
		cto.setTotalReportedCases(totalReportedCases);
		

		return cto;
	}
	
	
	
	
	
	
}

