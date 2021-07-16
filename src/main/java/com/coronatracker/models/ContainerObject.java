package com.coronatracker.models;

import java.util.List;

public class ContainerObject {

	private List<LocationStats> locationStats;
	private int totalReportedCases;
	public List<LocationStats> getLocationStats() {
		return locationStats;
	}
	public void setLocationStats(List<LocationStats> locationStats) {
		this.locationStats = locationStats;
	}

	public int getTotalReportedCases() {
		return totalReportedCases;
	}
	public void setTotalReportedCases(int totalReportedCases) {
		this.totalReportedCases = totalReportedCases;
	}
	public ContainerObject() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ContainerObject(List<LocationStats> locationStats, int totalReportedCases) {
		super();
		this.locationStats = locationStats;
		this.totalReportedCases = totalReportedCases;
	}
	
	
	
}
