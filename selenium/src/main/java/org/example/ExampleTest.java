package org.example;

import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.time.Duration;

public class ExampleTest {

    @Test
    public void testEquilateralIsOutput() {
        WebDriver driver = new ChromeDriver();

        driver.get("http://localhost:3000/");

        driver.getTitle();

        driver.manage().timeouts().implicitlyWait(Duration.ofMillis(500));

        driver.findElement(By.xpath("//*[@data-testid='x-field']")).sendKeys("5");
        driver.findElement(By.xpath("//*[@data-testid='y-field']")).sendKeys("5");
        driver.findElement(By.xpath("//*[@data-testid='z-field']")).sendKeys("5");

        driver.findElement(By.xpath("//*[@data-testid='submit-btn']")).click();

        String result = driver.findElement(By.xpath("//*[@data-testid='result-title']")).getText();

        Assert.assertTrue(result.contains("Equilateral"));

        driver.quit();
    }
}