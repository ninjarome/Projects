import java.util.Collection;
import java.util.ArrayList;
import java.util.Iterator;

public class City {
    private Collection<City> adjacentCities;
    private String name;

    public City(String name) {
        this.name = name;
        this.adjacentCities = new ArrayList<City>();
    }

    /**
     * Name of the city, can be assumed to be unique
     */
    public String getName() {
        return name;
    }

    /**
     * Adjacent city are connected to this city directly by road
     */
    public Collection<City> getAdjacentCities() {
        return adjacentCities;
    }

    public void addAdjacentCity(City city) {
        adjacentCities.add(city);
        city.getAdjacentCities().add(this);
    }

    public boolean canDriveTo(City end) {
        boolean result = false;

        ArrayList<City> adjecentAL = new ArrayList<City>(); //Turning adjacentcities into an ArrayList
        for (City i : this.adjacentCities) {
            adjecentAL.add(i);
        }

        System.out.println("city name is " + this.getName() + " or " + this);//printing adjacent cities names
        for (City i : this.adjacentCities) {
            System.out.println("adjacent cities is " + i.getName());
        }

        System.out.println("end = " + end.getName() + " " + end); //printing tests
        System.out.println("Checking = " + adjecentAL);
        System.out.println(adjecentAL.contains(end));
        System.out.println("+++CHECKING IF NOT DRIVABLE+++");
        System.out.println("adjacent of adjacent size = " + adjecentAL.get(0).getAdjacentCities().size());
        System.out.println(adjecentAL.size() <= 1);
        System.out.println("adjacent of adjacent = " + (adjecentAL.get(0).getAdjacentCities().stream().toList().get(0)));
        System.out.println(adjecentAL.get(0).getAdjacentCities().size() <= 1);
        System.out.println("adjacent of adjacent is same");
        System.out.println(adjecentAL.get(0).getAdjacentCities().stream().toList().get(0) == this);
        System.out.println("~~~~~~~~~~~~");

        //Check if adjacent
        if (adjecentAL.contains(end)) {
            System.out.println("YES CAN DRIVE");
            return true;
        //recurs through all connected cities and removes link if not the destination
        } else if (!(adjecentAL.size() <= 1) || !(adjecentAL.get(0).getAdjacentCities().size() <= 1) || adjecentAL.get(0).getAdjacentCities().stream().toList().get(0) != this) {
            System.out.println("CONTINUE LOOP");
            for (City city : this.adjacentCities) {
                if(result){//if it found a match, it will stop recursion
                    break;}
                if(city.adjacentCities.size() <= 1){
                    continue;
                }
                city.adjacentCities.remove(this);
                result = city.canDriveTo(end);
            }

        }
        if(result){
            return true;
        }
        System.out.println("CANT DRIVE");
        return false;
    }


    public static void main(String[] args) {
        City a = new City("A");
        City b = new City("B");
        City c = new City("C");
        City d = new City("D");
        City e = new City("E");
        City f = new City("F");
        City g = new City("G");

        a.addAdjacentCity(b);
        b.addAdjacentCity(c);
        c.addAdjacentCity(d);
        d.addAdjacentCity(e);
        e.addAdjacentCity(f);
        f.addAdjacentCity(g);

        System.out.println("a = "+ a);
        System.out.println("b = "+ b);
        System.out.println("c = "+ c);
        System.out.println("d = "+ d);
        System.out.println("Can a drive to c?");
        System.out.println(b.canDriveTo(d));
    }
}